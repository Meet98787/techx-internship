import { useMemo } from "react";

const SelectRoom = ({
  roomTypeLabel,
  roomTypeDescription,
  occupancyLabel,
  lineImageId,
  componentLabel,
  roomImageId,
  roomTypeImage,
  personCountLabel,
  lineImageIdLabel,
  componentImageId,
  imageLabel,
  roomTypeImageAltText,
  lineImageAltText,
  roomTypeImageAltText2,
  roomCapacityBackgroundColor,
  groupDivColor,
  rectangleIconColor,
  personsColor,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: roomCapacityBackgroundColor,
    };
  }, [roomCapacityBackgroundColor]);

  const presidentialStyle = useMemo(() => {
    return {
      color: groupDivColor,
    };
  }, [groupDivColor]);

  const personsStyle = useMemo(() => {
    return {
      color: rectangleIconColor,
    };
  }, [rectangleIconColor]);

  const roomCapacityStyle = useMemo(() => {
    return {
      color: personsColor,
    };
  }, [personsColor]);

  return (
    <div className="shrink-0 flex flex-row items-start justify-start gap-[30px] text-left text-31xl text-sandybrown font-roboto">
      <div className="relative w-[467px] h-[726px]">
        <div
          className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_40px_rgba(0,_0,_0,_0.06)] w-[467px] h-[726px]"
          style={rectangleDivStyle}
        />
        <img
          className="absolute top-[174px] left-[30px] rounded-3xs w-[407px] h-[462px] object-cover"
          alt=""
          src={roomTypeLabel}
        />
        <div
          className="absolute top-[30px] left-[30px] font-extralight"
          style={presidentialStyle}
        >
          {roomTypeDescription}
        </div>
        <div className="absolute top-[99px] left-[30px] w-[306.76px] h-[45px] text-11xl text-dimgray-300 font-poppins">
          <div
            className="absolute top-[0px] left-[0px] font-medium"
            style={personsStyle}
          >
            {occupancyLabel}
          </div>
          <div className="absolute top-[11px] left-[158px] flex flex-row items-center justify-start gap-[4px] text-lg">
            <img
              className="relative w-[4.76px] h-[15.49px] object-contain"
              alt=""
              src={lineImageId}
            />
            <div className="relative" style={roomCapacityStyle}>
              Room Capacity
            </div>
          </div>
        </div>
        <img
          className="absolute top-[666px] left-[30px] w-[30px] h-[30px] object-contain"
          alt=""
          src={componentLabel}
        />
      </div>
      <div className="relative w-[467px] h-[726px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_40px_rgba(0,_0,_0,_0.06)] w-[467px] h-[726px]" />
        <img
          className="absolute top-[174px] left-[30px] rounded-3xs w-[407px] h-[462px] object-cover"
          alt=""
          src={roomImageId}
        />
        <div className="absolute top-[30px] left-[30px] font-extralight">
          {roomTypeImage}
        </div>
        <div className="absolute top-[99px] left-[30px] w-[306.76px] h-[45px] text-11xl text-dimgray-300 font-poppins">
          <div className="absolute top-[0px] left-[0px] font-medium">
            {personCountLabel}
          </div>
          <div className="absolute top-[11px] left-[158px] flex flex-row items-center justify-start gap-[4px] text-lg">
            <img
              className="relative w-[4.76px] h-[15.49px] object-contain"
              alt=""
              src={lineImageIdLabel}
            />
            <div className="relative">Room Capacity</div>
          </div>
        </div>
        <img
          className="absolute top-[666px] left-[30px] w-[30px] h-[30px] object-contain"
          alt=""
          src={componentImageId}
        />
      </div>
      <div className="relative w-[467px] h-[726px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_0px_40px_rgba(0,_0,_0,_0.06)] w-[467px] h-[726px]" />
        <img
          className="absolute top-[185px] left-[30px] rounded-3xs w-[407px] h-[462px] object-cover"
          alt=""
          src={imageLabel}
        />
        <div className="absolute top-[41px] left-[30px] font-extralight">
          {roomTypeImageAltText}
        </div>
        <div className="absolute top-[110px] left-[30px] w-[306.76px] h-[45px] text-11xl text-dimgray-300 font-poppins">
          <div className="absolute top-[0px] left-[0px] font-medium">
            3 Persons
          </div>
          <div className="absolute top-[11px] left-[158px] flex flex-row items-center justify-start gap-[4px] text-lg">
            <img
              className="relative w-[4.76px] h-[15.49px] object-contain"
              alt=""
              src={lineImageAltText}
            />
            <div className="relative">Room Capacity</div>
          </div>
        </div>
        <img
          className="absolute top-[677px] left-[30px] w-[30px] h-[30px] object-contain"
          alt=""
          src={roomTypeImageAltText2}
        />
      </div>
    </div>
  );
};

export default SelectRoom;
