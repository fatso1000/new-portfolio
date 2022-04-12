import React, { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { AboutMeScreen, HomeScreen } from "../../screens";
import { ScreensEnum } from "../../types";
import ProfilePic from "../../assets/profilepic.jpeg";

export default function ScreenChanger() {
  const onChangeScreen = (screen: ScreensEnum) => {
    setIsChangingScreen(true);
    setTempCurrentScreen(screen);
  };

  const homeScreen = HomeScreen({ onChangeScreen });
  const aboutMeScreen = AboutMeScreen({ onChangeScreen });

  const [isChangingScreen, setIsChangingScreen] = useState<boolean>(false);
  const [screens, setScreens] = useState<any>({
    HOME: homeScreen,
    ABOUT_ME: aboutMeScreen,
  });
  const [currentScreen, setCurrentScreen] = useState<ScreensEnum>(
    ScreensEnum.HOME
  );
  const [tempCurrentScreen, setTempCurrentScreen] = useState(ScreensEnum.HOME);

  useEffect(() => {
    if (isChangingScreen) {
      setTimeout(() => {
        setIsChangingScreen(false);
        setCurrentScreen(tempCurrentScreen);
      }, 1000);
    }
  }, [isChangingScreen]);

  return (
    <>
      <div className="container-body">
        <div className="navbar">
          <div className="navbar-center">
            <div
              className={`navbar-title ${
                isChangingScreen || currentScreen !== ScreensEnum.HOME
                  ? " display-icon"
                  : ""
              }`}
              id="navbarTitle"
            >
              <img
                src={ProfilePic}
                className="home-image-title"
                alt="profile-pic"
                title="Home Button"
                onClick={() => onChangeScreen(ScreensEnum.HOME)}
              />
              <span>{currentScreen}</span>
            </div>
            <div>
              <IoMenuOutline className="navbar-hamburguer" />
            </div>
          </div>
        </div>
        <div className="content">
          <div
            className={`content-container ${
              isChangingScreen ? " hide-display" : ""
            }`}
            style={{ width: screens[currentScreen].leftSide.width }}
            id="leftSide"
          >
            {screens[currentScreen].leftSide.content}
          </div>
          <div
            className={`content-container align-right ${
              isChangingScreen ? " hide-profile" : ""
            }`}
            style={{ width: screens[currentScreen].rightSide.width }}
            id="rightSide"
          >
            {screens[currentScreen].rightSide.content}
          </div>
        </div>
      </div>
    </>
  );
}
