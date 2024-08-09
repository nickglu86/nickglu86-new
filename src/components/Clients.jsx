import React from "react";
import onemroboticsLogo from "./assets/client-logos/1mrobotics.png";
import aisapLogo from "./assets/client-logos/aisap3.svg";
import jekoLogo from "./assets/client-logos/jenko.png";

const Clients = () => {
  return (
    <section>
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
    </section>
  );
};

export default Clients;
