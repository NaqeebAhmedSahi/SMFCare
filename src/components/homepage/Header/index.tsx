"use client";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of slider data for the full section, now with titles and descriptions
  const sliderContent = [
    {
      image: "/images/header-homepage.png",
      title: "",
      description:
        "Explore our wide selection of precision-engineered surgical instruments designed of healthcare professionals worldwide.",
    },
    {
      image: "/images/2235.jpg",
      title: "",
      description:
        "Our instruments are crafted with precision to ensure the highest quality and reliability in every medical procedure.",
    },
    {
      image: "/images/image-2.jpg",
      title: "",
      description:
        "From surgical tools to diagnostic instruments, we provide the right solutions for every healthcare need.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  // Framer Motion variants for animation
  const slideVariants = {
    initial: { y: "100%", rotate: 45, opacity: 0 },
    animate: { y: 0, rotate: 0, opacity: 1, transition: { duration: 1 } },
    exit: { y: "-100%", rotate: -45, opacity: 0, transition: { duration: 1 } },
  };

  const descriptionVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { y: -50, opacity: 0, transition: { duration: 0.8 } },
  };

  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <section className="max-w-frame px-4">
          <motion.h2
            initial={{ y: "100px", opacity: 0, rotate: 10 }}
            whileInView={{ y: "0", opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn([
              integralCF.className,
              "text-4xl lg:text-[48px] lg:leading-[64px] mb-5 lg:mb-8",
            ])}
          >
            FIND SURGICAL INSTRUMENTS YOU CAN RELY ON
          </motion.h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="relative p-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-lg mb-6 lg:mb-8 border-4 border-white/30 shadow-lg"
              variants={descriptionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p className="text-sm lg:text-base max-w-[545px]">
                {sliderContent[currentImageIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
          <motion.div
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: "0", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              href="/shop/all"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-green-600 hover:bg-green-700 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse shadow-lg"
            >
              Shop Instruments
            </Link>
          </motion.div>
        </section>

        {/* Animated Slider Section */}
        <div className="relative min-h-[448px] md:min-h-[428px] overflow-hidden lg:-mt-14 md:-mt-0">
          <AnimatePresence mode="wait">
            <motion.section
              key={currentImageIndex}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center shadow-lg shadow-black rounded-lg"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                backgroundImage: `url(${sliderContent[currentImageIndex].image})`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <motion.h2
                  className="text-white text-4xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {sliderContent[currentImageIndex].title}
                </motion.h2>
              </div>
              {/* Add decorative icons */}
              <Image
                priority
                src="/icons/big-star.svg"
                height={104}
                width={104}
                alt="big star"
                className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px] animate-[spin_4s_infinite]"
              />
              <Image
                priority
                src="/icons/small-star.svg"
                height={56}
                width={56}
                alt="small star"
                className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]"
              />
            </motion.section>
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
