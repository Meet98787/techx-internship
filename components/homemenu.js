import { useMemo } from "react";

const Homemenu = ({
  group23,
  classicRoom,
  property1NoPosition,
  property1NoTop,
  property1NoLeft,
  property1NoOverflow,
  property1NoBorderBottom,
  property1NoBoxSizing,
  property1NoBorderRadius,
  groupDivWidth,
  groupDivRight,
  classicRoomColor,
  comfortableRoomsWithFontWeight,
  comfortableRoomsWithColor,
}) => {
  const property1NoStyle = useMemo(() => {
    return {
      position: property1NoPosition,
      top: property1NoTop,
      left: property1NoLeft,
      overflow: property1NoOverflow,
      borderBottom: property1NoBorderBottom,
      boxSizing: property1NoBoxSizing,
      borderRadius: property1NoBorderRadius,
    };
  }, [
    property1NoPosition,
    property1NoTop,
    property1NoLeft,
    property1NoOverflow,
    property1NoBorderBottom,
    property1NoBoxSizing,
    property1NoBorderRadius,
  ]);

  const groupDivStyle = useMemo(() => {
    return {
      width: groupDivWidth,
      right: groupDivRight,
    };
  }, [groupDivWidth, groupDivRight]);

  const classicRoomStyle = useMemo(() => {
    return {
      color: classicRoomColor,
    };
  }, [classicRoomColor]);

  const comfortableRoomsWithStyle = useMemo(() => {
    return {
      fontWeight: comfortableRoomsWithFontWeight,
      color: comfortableRoomsWithColor,
    };
  }, [comfortableRoomsWithFontWeight, comfortableRoomsWithColor]);

  return (
    <div
      className="rounded-3xs w-[1440px] h-[200px] text-left text-31xl text-gray-300 font-roboto"
      style={property1NoStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-floralwhite box-border border-b-[2px] border-solid border-white" />
      <img
        className="absolute top-[calc(50%_-_22px)] left-[1330px] w-[60px] h-11 object-cover"
        alt=""
        src={group23}
      />
      <div
        className="absolute h-[46%] w-[26.6%] top-[27%] right-[69.93%] bottom-[27%] left-[3.47%]"
        style={groupDivStyle}
      >
        <div
          className="absolute top-[0%] left-[0%] font-semibold"
          style={classicRoomStyle}
        >
          {classicRoom}
        </div>
        <div
          className="absolute top-[75%] left-[0%] text-xl font-semibold"
          style={comfortableRoomsWithStyle}
        >
          Comfortable rooms with impressive views.
        </div>
      </div>
    </div>
  );
};

export default Homemenu;
