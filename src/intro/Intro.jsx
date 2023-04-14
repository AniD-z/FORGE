import React from "react";
import "./Intro.css";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Intro = () => {
  useEffect(() => {
    gsap.fromTo(
      ".qt-up",
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
    );
    gsap.fromTo(
      ".qt-emp",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.6 }
    );

    gsap.fromTo(
      ".qt-down",
      { y: 70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.51, delay: 0.7 }
    );
    // gsap.fromTo(".banner", { x: 200 }, { x: -50, duration: 1 });

    gsap.fromTo(
      ".title-up",
      { x: -200 },
      {
        x: 150,
        // opacity: 1,
        duration: 500,
        // delay: 100,
        ease: "slow",
        scrollTrigger: {
          trigger: ".intro-start-box ",
          //   trigger: ".intro-quote ",
          //   trigger: ".intro-title",
          //   markers: true,
          scrub: 1,
          //   pin: true,
          start: "center 40% ",
          end: "bottom 10%",
        },
      }
    );

    gsap.fromTo(
      ".title-down",
      { x: 200 },
      {
        x: -150,
        // opacity: 1,
        duration: 500,
        // delay: 100,

        ease: "slow",
        scrollTrigger: {
          trigger: ".intro-start-box ",

          //   trigger: ".intro-quote ",
          //   trigger: ".intro-title",
          //   markers: true,
          scrub: 1,
          //   pin: true,
          start: "center 20% ",
          end: "bottom 10% ",
        },
      }
    );
  }, []);

  return (
    <section className="intro-page">
      <div className="intro-start-box ff-tc">
        <div className="intro-quote ">
          <div className="qt-txt qt-up">Forging your</div>
          <div className="qt-emp">THOUGHTS</div>
          <div className="qt-txt qt-down">to ACTIONS!</div>
        </div>
        <div className="intro-title ">
          <div className="title-up">
            <div className="">gamers</div>
            <div className="line-up">
              <div className="line"></div>
              <div className="date-up ">Apr 21 22</div>
            </div>
          </div>
          <div className="title-down">
            <div className="">garage!</div>
            <div className="line-down">
              <div className="line"></div>
              <div className="date-down ">Apr 21 22</div>
            </div>
          </div>
        </div>
      </div>
      <section className="filler ">
        <img src="public/pics/gif1.gif" alt="" srcset="" />
      </section>
    </section>
  );
};
