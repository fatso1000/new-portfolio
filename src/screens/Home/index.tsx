import React from "react";
import { ScreenAttributes, ScreenProps, ScreensEnum } from "../../types";

import ProfilePic from "../../assets/profilepic.jpeg";

export const HomeScreen = (props: ScreenProps) => {
  const onClick = () => {
    props.onChangeScreen(ScreensEnum.ABOUT_ME);
  };
  const leftSideContent = (
    <>
      <div>
        <h1 className="home-title">BENITEZ MATIAS</h1>
        <span className="home-subtitle">Front end Developer</span>
      </div>
      <div>
        <div className="home-button" onClick={onClick}>
          DISCOVER
        </div>
      </div>
    </>
  );
  const rightSideContent = (
    <>
      <img
        src={ProfilePic}
        draggable="false"
        className="home-image"
        alt="profile-pic"
      />
    </>
  );

  return {
    leftSide: { width: "50%", content: leftSideContent },
    rightSide: { width: "50%", content: rightSideContent },
  } as ScreenAttributes;
};
