export interface ScreenAttributes {
  leftSide: {
    width: string;
    content: any;
  };
  rightSide: {
    width: string;
    content: any;
  };
}

export interface ScreenProps {
  onChangeScreen: (screen: ScreensEnum) => void;
}

export enum ScreensEnum {
  HOME = "HOME",
  ABOUT_ME = "ABOUT_ME",
  CONTACT_ME = "CONTACT_ME",
}
