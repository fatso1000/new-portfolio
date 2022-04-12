import React from "react";
import { ScreenAttributes, ScreenProps } from "../../types";

import Pic1 from "../../assets/pic1.jpg";
import Pic2 from "../../assets/pic2.jpg";
import Pic3 from "../../assets/pic3.jpg";

export const AboutMeScreen = (props: ScreenProps) => {
  const leftSideContent = (
    <>
      <div className="about-me_content">
        <div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            euismod eleifend viverra. Sed ornare felis ut metus posuere, eu
            dignissim diam elementum. Suspendisse sed purus vitae lacus
            porttitor lobortis vitae eget tellus. Aliquam blandit mi non urna
            venenatis ultricies vitae a ex. Aenean nec leo feugiat, gravida
            metus non, tristique metus. Donec non ex sed mi faucibus vulputate.
            Pellentesque pulvinar orci at est scelerisque condimentum. Nam
            facilisis iaculis nunc vel dictum. Sed sed arcu felis. Integer
            pharetra, est quis vulputate sodales, felis sem elementum ligula, eu
            cursus ligula neque in est. Donec non varius orci. Sed at accumsan
            nunc. In lacus est, imperdiet ut efficitur eu, commodo a massa.
            Pellentesque cursus augue nibh, faucibus feugiat nulla interdum ut.
            Sed dictum, dolor in aliquam dictum, dolor lorem venenatis felis, et
            finibus ligula lacus at est. Etiam nec posuere arcu. Suspendisse non
            dignissim dui, id finibus ipsum. Curabitur pellentesque neque eget
            lacinia suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. In ut feugiat felis, sed tempor lorem. Morbi nulla sem,
            pulvinar in risus vel, ornare porta magna. Aliquam non cursus sem.
            Suspendisse pretium neque at lacus hendrerit congue. Mauris in
            suscipit felis, sit amet pretium leo.
          </span>
        </div>
      </div>
    </>
  );
  const rightSideContent = (
    <>
      <div className="about-me_content-right">
        <img
          src={Pic1}
          alt="pic1"
          style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
        />
        <img src={Pic2} alt="pic2" />
        <img
          src={Pic3}
          alt="pic3"
          style={{ borderBottomLeftRadius: 24, borderBottomRightRadius: 24 }}
        />
      </div>
    </>
  );

  return {
    leftSide: { width: "65%", content: leftSideContent },
    rightSide: { width: "35%", content: rightSideContent },
  } as ScreenAttributes;
};
