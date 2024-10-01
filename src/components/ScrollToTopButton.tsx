"use client";
/* eslint-disable @typescript-eslint/no-require-imports */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-10 right-10 p-4 rounded-full bg-gray-700 transition-colors"
        >
          <Image
            src={require("../../public/images/down-chevron.png")}
            alt={"입니다."}
            className="rotate-180 w-5 h-5"
          />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
