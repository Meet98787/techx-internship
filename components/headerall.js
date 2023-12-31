import { useMemo } from "react";

const Headerall = ({
  image2,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  frameDivBackgroundColor,
  homeFontWeight,
  homeColor,
  aboutUsColor,
  aboutUsFontWeight,
  roomsColor,
  eventsColor,
  servicesColor,
  contactUsColor,
  onFrameContainerClick,
  onAboutUsTextClick,
  onFrameContainer2Click,
  onFrameContainer3Click,
  onServicesTextClick,
  onFrameContainer5Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft, frameDivBackgroundColor]);

  const homeStyle = useMemo(() => {
    return {
      fontWeight: homeFontWeight,
      color: homeColor,
    };
  }, [homeFontWeight, homeColor]);

  const aboutUsStyle = useMemo(() => {
    return {
      color: aboutUsColor,
      fontWeight: aboutUsFontWeight,
    };
  }, [aboutUsColor, aboutUsFontWeight]);

  const roomsStyle = useMemo(() => {
    return {
      color: roomsColor,
    };
  }, [roomsColor]);

  const eventsStyle = useMemo(() => {
    return {
      color: eventsColor,
    };
  }, [eventsColor]);

  const servicesStyle = useMemo(() => {
    return {
      color: servicesColor,
    };
  }, [servicesColor]);

  const contactUsStyle = useMemo(() => {
    return {
      color: contactUsColor,
    };
  }, [contactUsColor]);

  return (
    <div
      className="rounded-3xs flex flex-row items-center justify-start py-0 px-5 gap-[214px] text-left text-lg text-white font-roboto"
      style={frameDivStyle}
    >
      <img
        className="relative w-[259px] h-[88px] object-cover"
        alt=""
        src={image2}
      />
      <div className="shrink-0 flex flex-row items-start justify-start gap-[20px]">
        <div
          className="shrink-0 flex flex-row items-center justify-center p-2.5 cursor-pointer text-goldenrod"
          onClick={onFrameContainerClick}
        >
          <div className="relative font-semibold" style={homeStyle}>
            Home
          </div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-center p-2.5">
          <div
            className="relative cursor-pointer"
            onClick={onAboutUsTextClick}
            style={aboutUsStyle}
          >
            About Us
          </div>
        </div>
        <div
          className="shrink-0 flex flex-row items-center justify-center p-2.5 cursor-pointer"
          onClick={onFrameContainer2Click}
        >
          <div className="relative" style={roomsStyle}>
            Rooms
          </div>
        </div>
        <div
          className="shrink-0 flex flex-row items-center justify-center p-2.5 cursor-pointer"
          onClick={onFrameContainer3Click}
        >
          <div className="relative" style={eventsStyle}>{`Events `}</div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-center p-2.5">
          <div
            className="relative cursor-pointer"
            onClick={onServicesTextClick}
            style={servicesStyle}
          >{`Services `}</div>
        </div>
        <div
          className="shrink-0 flex flex-row items-center justify-center p-2.5 cursor-pointer"
          onClick={onFrameContainer5Click}
        >
          <div className="relative" style={contactUsStyle}>{`Contact-Us `}</div>
        </div>
      </div>
      <div className="rounded-3xs bg-sandybrown shrink-0 flex flex-row items-center justify-center py-[15px] px-[30px]">
        <div className="relative font-semibold">Book Now</div>
      </div>
    </div>
  );
};

export default Headerall;
