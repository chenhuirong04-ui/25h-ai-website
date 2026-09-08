import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Transform } from "@/components/sections/Transform";
import { AIInside } from "@/components/sections/AIInside";
import { BuiltFromOps } from "@/components/sections/BuiltFromOps";
import { Industries } from "@/components/sections/Industries";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <WhatWeDo />
      <Transform />
      <AIInside />
      <BuiltFromOps />
      <Industries />
      <FinalCTA />
    </>
  );
}
