import React, { useRef } from "react";
import gsap from "gsap";
import { calcHeight } from "../utils/constants";
import { Link } from "react-router-dom";

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
      x: (touch.clientX / window.innerWidth) * 30 - 15, // Move the element based on touch position
      y: (touch.clientY / window.innerHeight) * 30 - 15,
    });

    gsap.to(descriptionRef.current, {
      x: (touch.clientX / window.innerWidth) * 40 - 25,
      y: (touch.clientY / window.innerHeight) * 50 - 25,
    });

    gsap.to(buttonRef.current, {
      x: (touch.clientX / window.innerWidth) * 60 - 35,
      y: (touch.clientY / window.innerHeight) * 70 - 35,
    });
  };

  return (
    <main
      ref={containerRef}
      className="w-full h-screen flex flex-col items-center justify-center overflow-x-hidden"
      onMouseMove={handleMouseMove} // Handle mouse movements (desktop)
      onTouchMove={handleTouchMove} // Handle touch movements (mobile)
      style={{ minHeight: calcHeight }}
    >
      <section className="space-y-6">
        <p className="text-start text-gray-500">Hi there! My name is</p>
        <h2
          ref={nameRef}
          className="text-start text-6xl sm:text-8xl text-gray-300 leading-[1.1]"
        >
          Precious Velia
        </h2>
        <p ref={descriptionRef} className="text-lg text-start opacity-75">
          Developer, Writer and hobbyist Photographer
        </p>
        <div ref={buttonRef} className="flex">
          <Link to="/about">
            <button className="rounded-md border border-emerald-300 text-lg font-[400] py-2 px-4 text-start">
              Learn More 💨
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
