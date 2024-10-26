import React from "react";
import {
  FaGit,
  FaJs,
  FaMarkdown,
  FaNode,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import velia from "../assets/velia2.jpg";

const AboutPage = () => {
  return (
    <main className="mt-10 space-y-8">
      <section>
        <img
          src={velia}
          alt="velia"
          loading="lazy"
          className="rounded-2xl opacity-70"
        />
      </section>
      <section className="text-start space-y-3 leading-6 tracking-wide">
        <p>
          I am Precious Velia, a developer and technical writer who loves
          turning complex code into clear communication. I combine hands-on
          development expertise with the ability to explain technical concepts
          in ways that make sense to everyone.
        </p>
        <p>
          Whether I'm building sophisticated systems or writing documentation, I
          focus on creating work that truly serves its purpose. I take pride in
          bridging the gap between developers and users, making technology more
          accessible while maintaining technical excellence.
        </p>
        <p>
          My dual background allows me to see projects from multiple angles –
          writing code that developers can maintain and documentation that users
          can actually understand. Every project benefits from this balanced
          approach, ensuring that both the technical implementation and its
          explanation meet the highest standards.
        </p>
      </section>
      <section className="text-start space-y-3 leading-6 tracking-wide">
        <p>Here are some techhologies i work with</p>
        <div className="flex gap-4">
          <FaReact />
          <FaVuejs />
          <FaGit />
          <FaMarkdown />
          <FaJs />
          <FaNode />
        </div>
      </section>
      <div className="flex">
        <Link to="/work">Check out my work 💨</Link>
      </div>
    </main>
  );
};

export default AboutPage;
