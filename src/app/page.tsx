"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { getWindowSize } from "../hooks/getWindowSize";
import StartBackground from "@/components/StarBackground";
import MobiusStrip from "@/components/MobiusStrip";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { width } = getWindowSize();
  // const { scrollYProgress } = useScroll();

  const buttonCompo = (url: string, text: string) => {
    return (
      <motion.a
        className="h-[50px] bg-gray-900 text-white flex items-center pl-5 rounded-2xl shadow-lg mt-2 hover:bg-[#ff047e]"
        whileHover={{ scale: 1.05 }}
      >
        <Link href={url} target="_blank" className="w-[70vw] max-w-[400px]">
          {text}
        </Link>
      </motion.a>
    );
  };
  // const customMove = (direction: string, start: number, end: number) => {
  //   let directionWidth = direction == "left" ? -width : width;
  //   return useTransform(scrollYProgress, [start, end], [0, directionWidth]);
  // };

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen bg-black ${
        width > 760 ? "p-12" : "p-0"
      }`}
    >
      <StartBackground />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: width > 760 ? "row" : "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 100,
          paddingRight: 100,
        }}
      >
        <MobiusStrip />
        <div style={{ textAlign: width > 760 ? "left" : "center" }}>
          <div
            className={`font-bold text-gray-200 ${
              width > 760 ? "text-8xl" : "text-5xl"
            } mt-0 mb-3 bold`}
          >
            LEE SU YEON
          </div>
          <div
            className={`font-bold text-gray-200 ${
              width > 760 ? "text-8xl" : "text-5xl"
            } mt-0 mb-0 bold`}
          >
            PORTFOLIO
          </div>
        </div>
      </div>

      <div className={`bg-white p-8 rounded-lg w-[80vw] max-w-[800px]`}>
        <h2 className="text-4xl bold text-gray-900 mb-4 text-center">∞INTRO</h2>
        <div
          style={{
            display: "flex",
            flexDirection: width > 760 ? "row" : "column",
            alignItems: "center",
          }}
        >
          <Image
            src={require("../../public/images/cat.jpeg")}
            alt="cat"
            className={`rounded-[50%] w-[250px] ${width > 760 && "mr-20"} mb-5`}
          />
          <div className="flex flex-col">
            {buttonCompo(
              "https://pastoral-muskmelon-f40.notion.site/11cc343b366b4427956a95033e919a65?pvs=4",
              "NOTION"
            )}
            {buttonCompo("https://github.com/tdouyeon", "GITHUB")}
            {buttonCompo("mailto:tdouyeon@gmail.com", "tdouyeon@gmail.com")}
          </div>
        </div>
        <p className="text-gray-600 text-xl leading-relaxed pt-10">
          안녕하세요, 프론트엔드 개발자 이수연입니다. 끊임없이 배우고 생각한
          것을 구현하는 것에 대해 매력을 느껴 개발 공부를 시작하게 되었습니다.
          뫼비우스의 띠처럼 끝없이 새로운 것들을 배우고 구현해내고 싶습니다.
        </p>
      </div>
      {/* <div style={{ width: "100%", display: "flex" }}>
        <motion.h1
          style={{ x: customMove("right", 0, 1) }}
          className={`font-bold text-gray-500 ${
            width > 760 ? "text-8xl" : "text-8xl"
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
          className={`font-bold text-center text-gray-500 ${
            width > 760 ? "text-8xl" : "text-8xl"
          } mt-0 mb-0 bold pt-0 pb-0 leading-none`}
        >
          PORTFOLIO
        </motion.h1>
      </div> */}
    </main>
  );
}
