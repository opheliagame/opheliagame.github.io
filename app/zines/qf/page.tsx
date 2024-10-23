"use client";

import dynamic from "next/dynamic";

import * as React from "react";
import { Sketch, SketchProps } from "@p5-wrapper/react";
import TextWithRandomizedSizes from "../../../components/generative/text-with-randomized-sizes";
import { useRef, useState } from "react";
import CoffeeButton from "../../../components/buttons/buymeacoffee";
import {
  mobileCheck,
  pickRandom,
  random,
  shuffleArray,
} from "../../../lib/utils";

// import sketch1 from "../../../sketches/p5/queering-families/zine-1";
const ReactP5Wrapper = dynamic(
  () => import("@p5-wrapper/react").then((mod) => mod.ReactP5Wrapper),
  { ssr: false }
);
// const w = dynamic(() => import('@p5-wrapper/react').then((mod) => mod), { ssr: false });

export default function Zine() {
  const [sketch, setSketch] = useState<Sketch<SketchProps> | undefined>(
    undefined
  );
  const [hasRunOnce, setHasRunOnce] = useState(false);
  const sketchRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const isServer = typeof window === "undefined";
  const isMobile = mobileCheck();

  const title1minSize = isMobile ? 36 : 48;
  const title1maxSize = isMobile ? 64 : 92;
  const title2minSize = isMobile ? 18 : 24;
  const title2maxSize = isMobile ? 24 : 48;
  const backminSize = isMobile ? 22 : title1minSize;
  const backmaxSize = isMobile ? 32 : title1maxSize;

  const randomtext =
    'We need new ideas, new dreams, and the courage to imagine alternative futures. Now if the moment to "think different." If we can imagine them first in a galaxy far, far away, it\'s only a matter of time before we boldly go and begin figuring out how to translate these inspired visions into our own everyday utopias'.repeat(
      isMobile ? 6 : 2
    );
  const brightPastelRainbowPride = [
    "#FFA4A4", // Brighter Pastel Red
    "#FFCC85", // Brighter Pastel Orange
    "#FFEE99", // Brighter Pastel Yellow
    "#9ED6C5", // Brighter Pastel Green
    "#8BB8E8", // Brighter Pastel Blue
    "#B996E2", // Brighter Pastel Purple
  ];

  let introTexts = [
    "Generativity comes from being able to derive something from a set of rules and processes. A key part of designing anything generative is thinking about the systems within which the rules work, and exploring the different mechanisms that can make a system evolve in ways that seem interesting. Starting from a basic system and set of rules and expanding into an exploratory approach allows a lot of space for unexpected behavior to occur and provide inspiration and feedback for next steps. ",
    "There is a lot of freedom in leaving something to be governed completely by a system. It frees you of thinking about and fussing over which text goes where and how much spacing should exist between two lines and what font and font size is the most appropriate to convey the feeling that you want to convey. It takes you away from these specific questions to more general questions of what possible combinations of text layout, font and font sizes you would like, and how should they vary across sentences and pages. ",
    "I do not write impressive words that provide any worthy relief or joy as sentences. Like everyone else though, I do like reading such sentences and saving them like photos; snapshots of the feeling of first reading them and the memory of when, where and how the words expressed themselves to me, along with the urge to read them again in the future to live those feelings again, and think the same thoughts again and wander happily in a sea of connections and ideas living next to each other. ",
    "The act of designing something is finding a solution for a problem. But instead what if we looked at the systems within which the problem exists. How would that change the designs we come up with.",
  ];
  introTexts = introTexts
    .map((t) => t.split(". "))
    .flat(1)
    .filter((t) => t.length > 0);

  const onClickButton = async () => {
    if (hasRunOnce) {
      setSketch(() => null);
    }

    const sk = (await import("../../../sketches/p5/queering-families/zine-1"))
      .default;

    if (sk) {
      console.log("Sketch loaded:", sk);
      setSketch(() => sk);

      if (sketchRef.current != null) {
        sketchRef.current.scrollIntoView({ behavior: "smooth" });
      }

      setHasRunOnce(true);
    } else {
      console.error("Sketch is undefined");
    }
  };

  return (
    <div className="w-screen">
      {/* landing background */}

      <div
        className="z-10 text-white font-sketch absolute top-0 bottom-0 w-full h-full"
        style={{ backgroundColor: pickRandom(brightPastelRainbowPride) }}
      >
        <TextWithRandomizedSizes
          min={backminSize}
          max={backmaxSize}
          backgroundColors={brightPastelRainbowPride}
        >
          {randomtext}
        </TextWithRandomizedSizes>
      </div>

      {/* landing */}
      <div className="w-screen h-screen">
        {/* landing */}
        <div className="px-4 absolute top-0 bottom-0 z-20 w-full h-screen flex flex-col justify-center items-center gap-y-6">
          {/* <h1 className="text-3xl md:text-7xl">Queering families</h1> */}
          <div className="shadow-xl">
            <h1 className="capitalize font-sketch text-black">
              <TextWithRandomizedSizes
                min={title1minSize}
                max={title1maxSize}
                backgroundColors={brightPastelRainbowPride}
                // hasBorder={true}
              >
                queering families
              </TextWithRandomizedSizes>
            </h1>
          </div>

          <h2 className="font-sketch shadow-2xl">
            <TextWithRandomizedSizes
              min={title2minSize}
              max={title2maxSize}
              backgroundColors={brightPastelRainbowPride}
              hasBorder={false}
            >
              a generative zine by opheliagame
            </TextWithRandomizedSizes>
          </h2>

          <button
            ref={buttonRef}
            className="bg-white font-sketch text-2xl md:text-3xl rounded-full p-4"
            onClick={onClickButton}
          >
            make your own zine!
          </button>

          <CoffeeButton />
        </div>

        <div className="hidden md:z-20 md:block md:absolute bottom-0 right-0 p-4">
          <CoffeeButton />
        </div>
      </div>

      {/* process */}
      <div className="z-20 relative w-full px-4 py-4 font-sans">
        {introTexts.map((t, index) => {
          let rowItems = shuffleArray([
            <p
              key={0}
              className="p-2 flex-1 text-neutral-900 shadow-md rounded-xl border-2 border-white border"
              style={{ backgroundColor: pickRandom(brightPastelRainbowPride) }}
            >
              {t}
            </p>,
            <p key={1} className="p-2 md:flex-1"></p>,
            <p key={2} className="p-2 md:flex-1"></p>,
          ]);

          return (
            <div key={index} className="flex flex-row text-md md:text-lg p-2">
              {rowItems}
            </div>
          );
        })}
      </div>

      {!isServer && sketch ? (
        <div
          ref={sketchRef}
          className="relative z-30 w-screen h-screen flex flex-col gap-y-6 justify-center items-center"
          style={{ backgroundColor: pickRandom(brightPastelRainbowPride) }}
        >
          <div className="border-2 border-white border-solid">
            <ReactP5Wrapper
              fallback={<h1>No sketch selected yet.</h1>}
              sketch={sketch}
            />
          </div>

          <div className="">
            <CoffeeButton />
          </div>
        </div>
      ) : null}
    </div>
  );
}
