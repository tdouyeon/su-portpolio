"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { getWindowSize } from "../hooks/getWindowSize";
import StartBackground from "@/components/StarBackground";

export default function Home() {
  const { width } = getWindowSize();
  const { scrollYProgress } = useScroll();

  const customMove = (direction: string, start: number, end: number) => {
    let directionWidth = direction == "left" ? -width : width;
    return useTransform(scrollYProgress, [start, end], [0, directionWidth]);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black p-10">
      <div style={{ width: "100%", display: "flex" }}>
        <StartBackground />
        <motion.h1
          style={{ x: customMove("right", 0, 1) }}
          className={`font-bold text-gray-800 ${
            width > 760 ? "text-10xl" : "text-8xl"
          } mt-0 mb-0 bold`}
        >
          LEE SU YEON
        </motion.h1>
      </div>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <motion.h1
          style={{
            x: customMove("left", width > 760 ? 0.2 : 0.07, 0.7),
          }}
          className={`font-bold text-center text-gray-800 ${
            width > 760 ? "text-10xl" : "text-8xl"
          } mt-0 mb-0 bold pt-0 pb-0 leading-none`}
        >
          FRONTEND
        </motion.h1>
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <motion.h1
          style={{ x: customMove("right", width > 760 ? 0.5 : 0.15, 1) }}
          className={`font-bold text-center text-gray-800 ${
            width > 760 ? "text-10xl" : "text-8xl"
          } mt-0 mb-0 bold`}
        >
          DEVELOPER
        </motion.h1>
      </div>

      {/* <motion.a
        className="w-20 h-20 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg mt-8"
        whileHover={{ scale: 1.2 }}
      >
        안녕하세요
      </motion.a> */}
    </main>
  );
}
