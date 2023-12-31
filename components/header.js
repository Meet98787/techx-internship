import Link from "next/link";
import { useMemo } from "react";

const Header = ({
  image2,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
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
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

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
          <div className="relative font-semibold">Home</div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-center p-2.5">
          <div className="relative cursor-pointer" onClick={onAboutUsTextClick}>
            About Us
          </div>
        </div>
        <div
          className="shrink-0 flex flex-row items-center justify-center p-2.5 cursor-pointer"
          onClick={onFrameContainer2Click}
        >
          <div className="relative">Rooms</div>
        </div>
        <div
          className="shrink-0 flex flex-row items-center justify-center p-2.5 cursor-pointer"
          onClick={onFrameContainer3Click}
        >
          <div className="relative">{`Events `}</div>
        </div>
        <div className="shrink-0 flex flex-row items-center justify-center p-2.5">
          <div
            className="relative cursor-pointer"
            onClick={onServicesTextClick}
          >{`Services `}</div>
        </div>
        <div
          className="shrink-0 flex flex-row items-center justify-center p-2.5 cursor-pointer"
          onClick={onFrameContainer5Click}
        >
          <div className="relative">{`Contact-Us `}</div>
        </div>
      </div>
      <div className="rounded-3xs bg-sandybrown shrink-0 flex flex-row items-center justify-center py-[15px] px-[30px]">
        <div className="relative font-semibold">Book Now</div>
      </div>
    </div>
  );
};

export default Header;
