import React from "react";
import Lottie from "lottie-react";
import appAnimation from "../assets/app-animation.json";

const Cover = () => {
  return (
    <section className="cover">
      <div className="content">
        <h1 className="title">
          Crafting 
          <br />
          <span className="gradient-text">Digital Solutions</span>
          <br />
          of  the Future
       </h1>
        <p className="desc">
        We provide architecture services and develop full stack technology applications for start up to enterprise companies 
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
