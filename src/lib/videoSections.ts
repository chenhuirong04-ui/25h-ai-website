export const VIDEO_SECTIONS = [
  { value: "our_work", label: "首页成果交付" },
  { value: "ops", label: "25H OPS" },
  { value: "workforceos", label: "WorkforceOS" },
  { value: "furniflow", label: "FurniFlow" },
  { value: "chanya", label: "Chanya" },
  { value: "other", label: "其他成果" },
] as const;

export type VideoSection = (typeof VIDEO_SECTIONS)[number]["value"];

export function sectionLabel(section: string): string {
  return VIDEO_SECTIONS.find((s) => s.value === section)?.label || section;
}
