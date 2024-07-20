import "./App.css";
import Lottie from "lottie-react";
import appAnimation from "./assets/app-animation.json";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#080808",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div className="content">
          <h1 className="title">
            Crafting <span className="gradient-text">Digital Solutions</span> 
            <br />
            for the future of tomorrow
          </h1>
          <p className="desc">
            Experience the power of smart note-taking and transform the way you
            work today.
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div style={{ position: "relative", width: "45%", marginTop: '100px', overflowl: 'hidden' }}>
        <Lottie animationData={appAnimation} />
        <div className="watermark-cover"></div>
      </div>
    </div>
  );
}

export default App;
