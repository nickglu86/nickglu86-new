import React from "react";
import Lottie from "lottie-react";
import appAnimation from "../../assets/app-animation.json";

const Cover = () => {
  return (
    <section id="cover">
      <div className="content">
        <h1 className="title">
          <span>Crafting</span> 
          <span className="gradient-text">Digital Solutions</span>
          <span>of the Future</span> 
       </h1>
        <p className="desc">
           We provide architecture services and develop full stack technology applications for start up to enterprise companies 
        </p>
        <button>
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
