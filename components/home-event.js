import { useMemo } from "react";

const HomeEvent = ({
  cardTitle,
  categoryLabel,
  propLeft,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const rectangleIconStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const groupDiv2Style = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  return (
    <div
      className="absolute top-[0px] left-[730px] w-[710px] h-[600px] text-left text-21xl text-white font-roboto"
      style={groupDiv1Style}
    >
      <img
        className="absolute top-[0px] left-[0px] rounded-3xs w-[710px] h-[600px] object-cover"
        alt=""
        src={cardTitle}
        style={rectangleIconStyle}
      />
      <div
        className="absolute top-[0px] left-[0px] w-[710px] h-[600px]"
        style={groupDiv2Style}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-400 w-[710px] h-[600px]"
          style={rectangleDivStyle}
        />
        <div className="absolute top-[176px] left-[169px] w-[372px] h-[246px]">
          <div className="absolute top-[0px] left-[0px] font-extrabold">
            {categoryLabel}
          </div>
          <div className="absolute top-[63px] left-[0px] text-xl leading-[28px] inline-block w-[372px]">{`is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using. `}</div>
          <div className="absolute top-[195px] left-[0px] rounded-3xs bg-sandybrown flex flex-row items-center justify-center py-[15px] px-9 text-lg">
            <div className="relative font-semibold">{`Explore `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEvent;
