import React from "react";
import Lottie from "lottie-react";
import appAnimation from "../assets/app-animation.json";

const Cover = () => {
  return (
    <section className="cover">
      <div className="content">
        <h1 className="title">
          Crafting <span className="gradient-text">Digital</span>
          <br />
          <span className="gradient-text"> Solutions </span> of tomorrow
        </h1>
        <p className="desc">
          Developing high-standard technology products & providing architecture
          services with innovative strategies and solutions.
        </p>
        <button onClick={() => alert("Coming Soon... \nMeantime you can contact me via email: nick.glu86@gmail.com")}>
          Get Started
        </button>
      </div>
      <div className="animation">
        <Lottie animationData={appAnimation} />
      </div>
    </section>
  );
};

export default Cover;
