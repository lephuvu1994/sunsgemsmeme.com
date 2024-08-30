import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import clsx from "clsx";
import "@splidejs/react-splide/css";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import ReactPlayer from "react-player/lazy";
import SlideArrowRight from "../Icons/SlideArrowRight";
import { motion } from "framer-motion";

const videoItem = [
  {
    type: "video",
    source: "/video/heTron.mov",
    title: "",
  },
  {
    type: "video",
    source: "/video/heTron2.mov",
    title: "",
  },
  {
    type: "video",
    source: "/video/heTron2.mov",
    title: "",
  },
  {
    type: "video",
    source: "/video/heTron2.mov",
    title: "",
  },
];
const POWER_UPS_ITEM = [
  {
    mode: "TRON",
    icon: "/tronIcon.svg",
    activeIcon: "",
    title: "TRON",
  },
  {
    mode: "SOL",
    icon: "/solIcon.svg",
    activeIcon: "",
    title: "SOL",
  },
  {
    mode: "BSC",
    icon: "/bscIcon.svg",
    activeIcon: "",
    title: "BSC",
  },
  {
    mode: "ETH",
    icon: "/ethIcon.svg",
    activeIcon: "",
    title: "ETH",
  },
];

const VideoContent: React.FC = () => {
  const [active, setActive] = useState(0);
  const videoRef = useRef<Splide>(null);
  const contentRef = useRef<Splide>(null);

  useEffect(() => {
    if (videoRef.current && contentRef.current && videoRef.current.splide) {
      contentRef.current.sync(videoRef.current.splide);
      videoRef.current.splide.on("moved", (newIndex) => {
        setActive(newIndex);
      });
    }
    if (videoRef.current) {
      videoRef.current.splide.on("move", (newIndex) => {
        setActive(newIndex);
      });
    }
  }, []);

  useEffect(() => {
    if (videoRef.current && videoRef.current.splide) {
      videoRef.current.splide.go(active);
    }
  }, [active]);

  const handleSelect = (index: number) => {
    if (index === active) return;
    setActive(index);
  };

  return (
    <div
      className={clsx(
        style.containerVideoContent,
        "flex flex-row justify-center w-full relative"
      )}
    >
      <div className="absolute top-8 md:top-1/2 left-0 md:left-1/2 md:-translate-x-[374px] md:-translate-y-1/2 flex flex-col items-center justify-evenly sm:justify-center gap-4 sm:gap-x-14 lg:gap-x-20">
        {POWER_UPS_ITEM.map((powerUp, index) => (
          <motion.div
            key={index}
            className={clsx(
              "flex w-[68px] flex-row cursor-pointer items-center",
              index !== active ? " opacity-70" : "font-bold"
            )}
            onClick={() => handleSelect(index)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
          >
            <div className="flex-shrink-0">
              <img
                src={powerUp.icon}
                alt={powerUp.title}
                width={64}
                height={64}
                sizes="64px"
                className="w-10 sm:w-16"
              />
            </div>
            <div className="mt-2 flex-1 hidden md:block">
              <div
                className={clsx(
                  style.titleIcon,
                  "text-d-din text-lg leading-[20px]"
                )}
              >
                {powerUp.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="max-w-[400px] lg:mx-auto lg:max-w-[400px] px-6">
        <Splide
          ref={videoRef}
          className="flex items-center"
          hasTrack={false}
          options={{
            pagination: false,
            rewind: true,
            type: "fade",
            height: "100%",
          }}
        >
          <SplideTrack>
            {videoItem.map((item, index) => (
              <SplideSlide key={index}>
                <div className="relative w-full p-[10px]">
                  <div className="absolute left-0 top-0 h-[20%] w-[96%] border-l-[1px] border-t-[1px] border-white md:w-[310px]"></div>
                  <div className={clsx(style.imgWrapper, "relative p-[1px]")}>
                    {item.type === "video" ? (
                      <ReactPlayer
                        url={item.source}
                        playsinline
                        controls={true}
                        width="auto"
                        height="100%"
                        playing={index === active}
                        loop
                      />
                    ) : (
                      <img
                        src={item.source}
                        alt={item.title}
                        width={842}
                        height={420}
                        className="mx-auto"
                        sizes="(max-width: 1023px) 90vw, 45vw"
                      />
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 h-[20%] w-[90%] border-b-[1px] border-r-[1px] border-white md:w-[310px]"></div>
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__arrows text-white">
            <button
              aria-label="prev slide"
              className="splide__arrow--prev absolute !-left-7 top-1/2 z-[1] flex -translate-y-2/4 rotate-0 cursor-pointer items-center justify-center opacity-80 hover:opacity-100 lg:!-left-10"
            >
              <SlideArrowRight />
            </button>
            <button
              aria-label="next slide"
              className="splide__arrow--next absolute !-right-7 top-1/2 z-[1] flex -translate-y-2/4 cursor-pointer items-center justify-center opacity-80 hover:opacity-100 lg:!-right-10"
            >
              <SlideArrowRight />
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default VideoContent;
