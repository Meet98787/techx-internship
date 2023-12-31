import { useMemo } from "react";

const DateCard = ({
  featureImageUrl,
  promotionTitle,
  featureSubtitle,
  groupDivLeft,
  groupDivTop,
  dec2022BackgroundColor,
  allRoomsAreColor,
  groupIconColor,
  propColor,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: groupDivLeft,
      top: groupDivTop,
    };
  }, [groupDivLeft, groupDivTop]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: dec2022BackgroundColor,
    };
  }, [dec2022BackgroundColor]);

  const dec2022Style = useMemo(() => {
    return {
      color: allRoomsAreColor,
    };
  }, [allRoomsAreColor]);

  const elevateYourSensesStyle = useMemo(() => {
    return {
      color: groupIconColor,
    };
  }, [groupIconColor]);

  const allRoomsAreStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="absolute top-[0px] left-[0px] bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.02)] w-[467px] h-[527px] text-left text-xl text-black font-roboto"
      style={groupDivStyle}
    >
      <img
        className="absolute h-[59.2%] w-full top-[0%] right-[0%] bottom-[40.8%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={featureImageUrl}
      />
      <div className="absolute h-[56.36%] w-[87.79%] top-[43.64%] right-[6%] bottom-[0%] left-[6.21%]">
        <div
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.12)]"
          style={rectangleDivStyle}
        />
        <div className="absolute h-[79.8%] w-[90%] top-[10.1%] right-[4.88%] bottom-[10.1%] left-[5.12%]">
          <div className="absolute top-[0%] left-[0%]" style={dec2022Style}>
            25 Dec,2022
          </div>
          <div
            className="absolute top-[18.14%] left-[0%] text-11xl text-darkslategray-100"
            style={elevateYourSensesStyle}
          >
            {promotionTitle}
          </div>
          <div
            className="absolute w-full top-[39.24%] left-[0%] text-lg leading-[28px] text-darkgray-100 inline-block"
            style={allRoomsAreStyle}
          >
            All rooms are air conditioned and feature an elegant ensuite
            bathroom with shower will be can not to come you can not.
          </div>
          <img
            className="absolute h-[12.66%] w-[8.13%] top-[87.34%] right-[91.87%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src={featureSubtitle}
          />
        </div>
      </div>
    </div>
  );
};

export default DateCard;
