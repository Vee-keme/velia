import React, { useRef } from "react";
import gsap from "gsap";
import { calcHeight } from "../utils/constants";

const HomePage = () => {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    gsap.to(nameRef.current, {
      x: (clientX / window.innerWidth) * 90 - 15, // Move the element based on the mouse position
      y: (clientY / window.innerHeight) * 30 - 15,
    });

    gsap.to(descriptionRef.current, {
      x: (clientX / window.innerWidth) * 50 - 25,
      y: (clientY / window.innerHeight) * 50 - 25,
    });

    gsap.to(buttonRef.current, {
      x: (clientX / window.innerWidth) * 70 - 35,
      y: (clientY / window.innerHeight) * 70 - 35,
    });
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0]; // Get the first touch point

    gsap.to(nameRef.current, {
      x: (touch.clientX / window.innerWidth) * 90 - 15, // Move the element based on touch position
      y: (touch.clientY / window.innerHeight) * 30 - 15,
    });

    gsap.to(descriptionRef.current, {
      x: (touch.clientX / window.innerWidth) * 50 - 25,
      y: (touch.clientY / window.innerHeight) * 50 - 25,
    });

    gsap.to(buttonRef.current, {
      x: (touch.clientX / window.innerWidth) * 70 - 35,
      y: (touch.clientY / window.innerHeight) * 70 - 35,
    });
  };

  return (
    <main
      ref={containerRef}
      className="w-full h-screen flex flex-col items-center justify-center"
      onMouseMove={handleMouseMove}
      style={{ minHeight: calcHeight }}
    >
      <section className="space-y-10">
        <p className="text-start">Hi there! My name is</p>
        <h2 ref={nameRef} className="text-start text-5xl">
          Precious Velia
        </h2>
        <h3 ref={descriptionRef} className="text-xl">
          Developer, Writer and hobbyist Photographer
        </h3>
        <div ref={buttonRef}>
          <button>Learn More</button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
