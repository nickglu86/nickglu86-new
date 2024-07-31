import "./App.css";
import Lottie from "lottie-react";
import appAnimation from "./assets/app-animation.json";
import natLogo from "./assets/client-logos/naturalint.png";
import onemroboticsLogo from "./assets/client-logos/1mrobotics.png";
import aisapLogo from "./assets/client-logos/aisap3.svg";
import jekoLogo from "./assets/client-logos/jenko.png";
function App() {
  return (
    <main>
      <section className="cover">
        <div className="content">
          {/* <h1 className="title">
            Crafting  <br />
            <span className="gradient-text">Digital Solutions</span>
            <br />
            of the future
          </h1> */}
          <h1 className="title">
            Crafting  <span className="gradient-text">Digital</span> <br />
            <span className="gradient-text"> Solutions </span>
        
            of tomorrow
          </h1>
          <p className="desc">
            Providing development and architecture services and <br />creating high
            standard technology products{" "}
          </p>
          <button onClick={() => alert("Coming Soon... \nBe Patient :)")}>Get Started</button>
        </div>

        <div className="animation">
          <Lottie animationData={appAnimation} />
          <div className="watermark-cover"></div>
        </div>
      </section>
      {/* <section>
        <div className="clients">
        
          <ul>
            <li>
              <img src={onemroboticsLogo} alt="1mrobotics" />
            </li>
            <li>
              <img src={natLogo} alt="naturalint" />
            </li>

            <li>
              <img src={jekoLogo} alt="jeko" />
            </li>
            <li>
              <img src={aisapLogo} alt="aisap" />
            </li>
          </ul>
        </div>
      </section> */}
    </main>
  );
}

export default App;
