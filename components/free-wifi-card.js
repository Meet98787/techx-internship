import { useMemo } from "react";

const FreeWifiCard = ({
  freeWiFi,
  frame,
  ironlroningBoard,
  frame1,
  bathroom,
  frame2,
  airConditioning,
  frame3,
  propLeft,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
  propWidth4,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const groupDiv3Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const groupDiv4Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const groupDiv5Style = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const groupDiv6Style = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-52 h-[195px] text-left text-xl text-dimgray-100 font-roboto"
      style={groupDiv2Style}
    >
      <div
        className="absolute top-[0px] left-[0px] w-32 h-[30px]"
        style={groupDiv3Style}
      >
        <div className="absolute top-[3px] left-[40px] capitalize">
          {freeWiFi}
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src={frame}
        />
      </div>
      <div
        className="absolute top-[55px] left-[0px] w-52 h-[30px]"
        style={groupDiv4Style}
      >
        <div className="absolute top-[3px] left-[40px] capitalize">
          {ironlroningBoard}
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src={frame1}
        />
      </div>
      <div
        className="absolute top-[110px] left-[0px] w-32 h-[30px]"
        style={groupDiv5Style}
      >
        <div className="absolute top-[3px] left-[40px] capitalize">
          {bathroom}
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src={frame2}
        />
      </div>
      <div
        className="absolute top-[165px] left-[0px] w-[183px] h-[30px]"
        style={groupDiv6Style}
      >
        <div className="absolute top-[3px] left-[40px] capitalize">
          {airConditioning}
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src={frame3}
        />
      </div>
    </div>
  );
};

export default FreeWifiCard;
