import { useMemo } from "react";

const ChickenSandwichForm = ({
  sandwichType,
  sandwichImageName,
  propLeft,
  propWidth,
  propRight,
  propWidth1,
  propRight1,
  propLeft1,
  propLeft2,
  propLeft3,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const groupDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const ellipseIconStyle = useMemo(() => {
    return {
      width: propWidth1,
      right: propRight1,
      left: propLeft1,
    };
  }, [propWidth1, propRight1, propLeft1]);

  const chickenSandwichStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const bStyle = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[345px] h-[413px] text-left text-xl text-gray-500 font-roboto"
      style={groupDivStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray-100 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.21)]" />
      <div
        className="absolute h-[83.29%] w-[67.25%] top-[8.47%] right-[16.23%] bottom-[8.23%] left-[16.52%]"
        style={groupDiv1Style}
      >
        <img
          className="absolute h-[63.95%] w-[94.83%] top-[0%] right-[3.02%] bottom-[36.05%] left-[2.16%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={sandwichType}
          style={ellipseIconStyle}
        />
        <div
          className="absolute top-[68.31%] left-[3.88%] text-7xl leading-[28px]"
          style={chickenSandwichStyle}
        >
          {sandwichImageName}
        </div>
        <div className="absolute top-[80.81%] left-[0%] leading-[28px]">
          Romaine lettuce, parmigia
        </div>
        <b
          className="absolute top-[91.86%] left-[42.24%] leading-[28px] text-sandybrown"
          style={bStyle}
        >
          59$
        </b>
      </div>
    </div>
  );
};

export default ChickenSandwichForm;
