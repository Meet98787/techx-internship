import { useMemo } from "react";

const Homemenuactive = ({
  rectangle14,
  classicRoom,
  group23,
  property1YesPosition,
  property1YesTop,
  property1YesLeft,
  property1YesBorderRadius,
  property1YesBorderBottom,
  property1YesBoxSizing,
  classicRoomColor,
  comfortableRoomsWithColor,
}) => {
  const property1YesStyle = useMemo(() => {
    return {
      position: property1YesPosition,
      top: property1YesTop,
      left: property1YesLeft,
      borderRadius: property1YesBorderRadius,
      borderBottom: property1YesBorderBottom,
      boxSizing: property1YesBoxSizing,
    };
  }, [
    property1YesPosition,
    property1YesTop,
    property1YesLeft,
    property1YesBorderRadius,
    property1YesBorderBottom,
    property1YesBoxSizing,
  ]);

  const classicRoom1Style = useMemo(() => {
    return {
      color: classicRoomColor,
    };
  }, [classicRoomColor]);

  const comfortableRoomsWith1Style = useMemo(() => {
    return {
      color: comfortableRoomsWithColor,
    };
  }, [comfortableRoomsWithColor]);

  return (
    <div
      className="w-[1440px] h-[200px] text-left text-31xl text-gray-300 font-roboto"
      style={property1YesStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-sandybrown" />
      <img
        className="absolute h-full w-[31.25%] top-[0%] right-[68.75%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle14}
      />
      <div
        className="absolute top-[29%] left-[35.42%] font-semibold"
        style={classicRoom1Style}
      >
        {classicRoom}
      </div>
      <div
        className="absolute top-[63.5%] left-[35.42%] text-xl font-semibold text-darkgray-100"
        style={comfortableRoomsWith1Style}
      >
        Comfortable rooms with impressive views.
      </div>
      <img
        className="absolute h-[22%] w-[4.17%] top-[39%] right-[3.47%] bottom-[39%] left-[92.36%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={group23}
      />
    </div>
  );
};

export default Homemenuactive;
