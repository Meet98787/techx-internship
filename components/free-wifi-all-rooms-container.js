import { useMemo } from "react";

const FreeWifiAllRoomsContainer = ({
  amenities,
  roomAmenities,
  propTop,
  propLeft,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const allRoomsAreStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[214px] left-[0px] w-[471px] h-[134px] text-center text-15xl text-dimgray-200 font-roboto"
      style={groupDiv1Style}
    >
      <div className="absolute top-[0px] left-[102px] font-semibold">
        {amenities}
      </div>
      <div
        className="absolute top-[50px] left-[calc(50%_-_133.5px)] text-lg leading-[28px] text-darkgray-100 text-left inline-block w-[369px]"
        style={allRoomsAreStyle}
      >
        All rooms are air conditioned and feature an elegant ensuite bathroom
        with shower will be can not to come you can not.
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-20 h-20 object-cover"
        alt=""
        src={roomAmenities}
      />
    </div>
  );
};

export default FreeWifiAllRoomsContainer;
