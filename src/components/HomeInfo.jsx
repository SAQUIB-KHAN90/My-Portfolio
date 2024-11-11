import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi,I am <span className="font-semibold">Saquib Khan</span>👋
      <br />A Full Stack Developer
      <br />
      <br />
      Use Left/Right Arrow or Mouse/Hands to Rotate the Island
    </h1>
  ),
  2: (
    <h1>
      <InfoBox
        text={
          <>
            Curious who I am?
            <br />
            Check out my skills and background!
          </>
        }
        link="/about"
        btnText="Learn more.."
      />
    </h1>
  ),
  3: (
    <h1>
      <InfoBox
        text={
          <>
            Embarked on exciting new projects recently.
            <br />
            Curious about what I can do?
          </>
        }
        link="/projects"
        btnText="Visit my Portfolio.."
      />
    </h1>
  ),
  4: (
    <h1>
      <InfoBox
        text={
          <>
            Let’s Connect and Create Together!
            <br />
            I'm just a message away
          </>
        }
        link="/contact"
        btnText="Let's talk.."
      />
    </h1>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
