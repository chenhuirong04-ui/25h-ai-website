"use server";

import { createAdminClient, getSupabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function getPublicVideos() {
  const { data, error } = await getSupabase()
    .from("videos")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });
  if (error) return [];
  return data || [];
}

export async function getAllVideos() {
  const admin = createAdminClient();
  const { data, error } = await admin
    .from("videos")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw new Error(error.message);
  return data || [];
}

export async function getVideo(id: string) {
  const admin = createAdminClient();
  const { data, error } = await admin
    .from("videos")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

async function uploadFile(file: File, folder: string): Promise<string> {
  const admin = createAdminClient();
  const ext = file.name.split(".").pop() || "bin";
  const path = `${folder}/${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
  const buf = Buffer.from(await file.arrayBuffer());
  const { error } = await admin.storage.from("media").upload(path, buf, {
    contentType: file.type,
    upsert: false,
  });
  if (error) throw new Error(`Upload failed: ${error.message}`);
  const { data: urlData } = admin.storage.from("media").getPublicUrl(path);
  return urlData.publicUrl;
}

export async function createVideo(formData: FormData) {
  const admin = createAdminClient();
  const cover = formData.get("cover") as File | null;
  const video = formData.get("video") as File | null;

  let coverUrl = "";
  let videoUrl = "";
  if (cover && cover.size > 0) coverUrl = await uploadFile(cover, "covers");
  if (video && video.size > 0) videoUrl = await uploadFile(video, "videos");

  const record = {
    title_zh: (formData.get("title_zh") as string) || "",
    title_en: (formData.get("title_en") as string) || "",
    description_zh: (formData.get("description_zh") as string) || "",
    description_en: (formData.get("description_en") as string) || "",
    video_url: videoUrl,
    cover_url: coverUrl,
    sort_order: parseInt((formData.get("sort_order") as string) || "0"),
    is_published: formData.get("is_published") === "true",
  };

  const { error } = await admin.from("videos").insert(record);
  if (error) throw new Error(error.message);
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function updateVideo(id: string, formData: FormData) {
  const admin = createAdminClient();
  const cover = formData.get("cover") as File | null;
  const video = formData.get("video") as File | null;

  const record: Record<string, unknown> = {
    title_zh: (formData.get("title_zh") as string) || "",
    title_en: (formData.get("title_en") as string) || "",
    description_zh: (formData.get("description_zh") as string) || "",
    description_en: (formData.get("description_en") as string) || "",
    sort_order: parseInt((formData.get("sort_order") as string) || "0"),
    is_published: formData.get("is_published") === "true",
  };

  if (cover && cover.size > 0) record.cover_url = await uploadFile(cover, "covers");
  if (video && video.size > 0) record.video_url = await uploadFile(video, "videos");

  const { error } = await admin.from("videos").update(record).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function togglePublish(id: string) {
  const admin = createAdminClient();
  const video = await getVideo(id);
  const { error } = await admin
    .from("videos")
    .update({ is_published: !video.is_published })
    .eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin");
  revalidatePath("/");
}

export async function deleteVideo(id: string) {
  const admin = createAdminClient();
  const { error } = await admin.from("videos").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin");
  revalidatePath("/");
}
