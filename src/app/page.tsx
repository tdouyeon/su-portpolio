"use client";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import StartBackground from "@/components/StarBackground";
import MobiusStrip from "@/components/MobiusStrip";
import Image from "next/image";
import Modal from "@/components/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import ScrollToTopButton from "@/components/ScrollToTopButton";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./globals.css";

const cardsData = [
  {
    title: "HTML/CSS",
    content:
      "HTML5와 CSS3에 능숙하며, 시멘틱 마크업을 사용하여 웹 페이지의 구조를 명확하게 설계할 수 있습니다. 반응형 디자인을 구현하기 위해 Flexbox를 능숙하게 사용하며, 다양한 브라우저와 기기에서 일관된 사용자 경험을 제공합니다. 실제로 개인 포트폴리오 웹사이트를 개발하면서, 다양한 CSS 프레임워크(Bootstrap, Tailwind CSS)를 사용해 본 경험이 있습니다.",
  },
  {
    title: "JAVASCRIPT",
    content:
      "JavaScript에 대한 깊은 이해를 가지고 있으며, ES6 이상의 최신 문법을 능숙하게 사용합니다. 비동기 프로그래밍(Async/Await, Promises)에 대한 경험이 있으며, DOM 조작 및 이벤트 핸들링에 능숙합니다. 실제 프로젝트에서는 JavaScript를 사용해 동적인 웹 애플리케이션을 개발했으며, AJAX를 통해 서버와의 데이터 통신을 원활하게 처리한 경험이 있습니다.",
  },
  {
    title: "REACT NATIVE",
    content:
      "React Native를 사용하여 iOS와 Android 플랫폼에서 작동하는 모바일 애플리케이션을 개발한 경험이 있습니다. 컴포넌트 기반 아키텍처와 상태 관리 라이브러리(Redux)에 능숙합니다. 개인 프로젝트로 영단어 애플리케이션을 개발하여, 사용자 인터페이스를 개선하고 사용자 경험을 최적화하는 데 중점을 두었습니다.",
  },
  {
    title: "NEXT JS",
    content:
      "API Routes를 통해 서버리스 API를 만들고, 파일 기반 라우팅으로 효율적으로 페이지를 관리한 경험이 있습니다. 또한 CSS 모듈을 사용하여 각 컴포넌트에 독립적인 스타일을 적용하며, Vercel을 통해 애플리케이션을 배포하는 데 능숙합니다.",
  },
];

const projectData = [
  {
    title: "영단어 앱",
    skills: ["React Native", "NodeJS", "Type Script", "SQLite"],
    duration: "2024-09 ~ 2024-09",
    content:
      "여러 영단어 어플들을 써보면서 있으면 좋겠다고 생각했던 기능 2가지를 추가해본 어플입니다. 기본적으로 단어, 카테고리 관련 추가/수정/삭제, 발음 재생 기능이 있고, 여기에 더해서 단어 리스트의 필터 기능, 네이버 사전 검색 기능을 추가 하였습니다.",
    images: ["englishApp1", "englishApp2", "englishApp3", "englishApp4"],
  },
  {
    title: "네스티(채팅 앱)",
    skills: ["React Native", "Firebase"],
    duration: "2024-03 ~ 2024-03",
    content:
      "기본적인 채팅 어플을 구현하였습니다. Firebase Firestore를 통해 회원가입, 로그인, 채팅, 메시지 전송 기능을 구현했으며, Context API를 사용하여 사용자 로그인 정보를 프로필에 노출하였습니다.",
    images: ["chat1", "chat2", "chat3", "chat4"],
  },
  {
    title: "포트폴리오 사이트",
    skills: ["Next JS", "tailwind"],
    duration: "2024-09 ~ 2024-09",
    content:
      "현재 보고 계신 사이트입니다. next js와 관련 라이브러리 tailwind를 사용해서 구현했으며, vercel로 배포하였습니다.",
    images: ["portfolio1", "portfolio2", "portfolio3", "portfolio4"],
  },
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<{
    title: string;
    content: string;
  }>();

  const buttonCompo = (url: string, text: string) => {
    return (
      <motion.a
        className="w-[70vw] max-w-[400px] h-[50px] bg-gray-900 text-white flex items-center pl-5 rounded-2xl shadow-lg mt-2 hover:bg-[#D2E0FB] hover:text-black"
        whileHover={{ scale: 1.05 }}
        href={url}
        target="_blank"
      >
        {text}
      </motion.a>
    );
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black p-0 md:p-12">
      <StartBackground />
      <div className="w-screen h-screen flex justify-center items-center px-24 flex-col md:flex-row">
        <MobiusStrip />
        <div className="text-center md:text-left">
          <div className="font-bold text-gray-200 text-5xl md:text-8xl mt-0 mb-3 bold">
            LEE SU YEON
          </div>
          <div className="font-bold text-gray-200 text-5xl md:text-8xl mt-0 mb-0 bold">
            PORTFOLIO
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg w-[80vw] max-w-[800px]">
        <h2 className="text-4xl bold text-gray-900 mb-4 text-center">∞INTRO</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <Image
            src={require("../../public/images/cat.jpeg")}
            alt="cat"
            className="rounded-[50%] w-[250px] md:mr-20 mb-5"
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
          앞으로도 끝없이 새로운 것들을 배우고 구현해내고 싶습니다.
        </p>
      </div>
      <div className="mt-40 rounded-lg w-[80vw] max-w-[800px]">
        <h2 className="text-4xl bold text-white mb-4 text-center">
          ∞MAIN SKILLS
        </h2>
      </div>
      <div className="flex justify-center items-center space-x-4 flex-col lg:flex-row">
        {cardsData.map((card, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false });
          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: 180 }}
              animate={{
                opacity: isInView ? 1 : 0,
                rotateY: isInView ? 0 : 180,
              }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="w-48 h-40 flex flex-col items-center justify-center text-white font-bold rounded-lg shadow-lg mb-3 ml-3 border border-[#D2E0FB] hover:bg-[#D2E0FB] hover:text-black"
              onClick={() =>
                setSelectedOption({ title: card.title, content: card.content })
              }
            >
              <h2 className="text-xl bold">{card.title}</h2>
            </motion.div>
          );
        })}
      </div>
      {selectedOption?.title && (
        <Modal
          onClose={() => {
            setSelectedOption({ title: "", content: "" });
          }}
          title={selectedOption?.title}
          content={selectedOption?.content}
        />
      )}
      <div className="mt-40 rounded-lg w-[80vw] max-w-[800px]">
        <h2 className="text-4xl bold text-white text-center mb-10">
          ∞PROJECTS
        </h2>
        {projectData.map((data, index) => (
          <div className="flex mt-10" key={index}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              keyboard={{
                enabled: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Keyboard, Pagination, Navigation]}
              loop={true}
              className="mySwiper w-[400px]"
            >
              {data.images.map((image, imageIndex) => (
                <SwiperSlide
                  key={imageIndex}
                  className="flex justify-center items-center text-[18px]"
                >
                  <Image
                    src={require(`../../public/images/${image}.png`)}
                    alt={image}
                    className="min-w-[200px] h-[400px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="min-w-48 max-w-[48%] min-h-40 flex flex-col items-center justify-center text-white font-bold rounded-lg shadow-lg mb-3 ml-3 p-5">
              <div className="flex justify-between w-full flex-col lg:flex-row">
                <div className="text-xl bold">{data.title}</div>
                <div className="text-gray-400">{data.duration}</div>
              </div>
              <div className="flex flex-wrap  w-[100%] mt-1">
                {data.skills.map((skill, skillsIndex) => (
                  <div
                    key={skillsIndex}
                    className="rounded-lg bg-[#D2E0FB] p-1 text-black text-sm mr-2 mb-1"
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className="mt-2">{data.content}</div>
            </div>
          </div>
        ))}
      </div>
      <ScrollToTopButton />
    </main>
  );
}
