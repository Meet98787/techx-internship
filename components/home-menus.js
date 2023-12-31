import Homemenu from "./homemenu";
import Homemenuactive from "./homemenuactive";

const HomeMenus = () => {
  return (
    <div className="absolute top-[2753px] left-[240px] w-[1441px] h-[804px]">
      <Homemenu
        group23="/group-23@2x.png"
        classicRoom="Superior Room"
        property1NoPosition="absolute"
        property1NoTop="0px"
        property1NoLeft="0px"
        property1NoOverflow="hidden"
        property1NoBorderBottom="unset"
        property1NoBoxSizing="unset"
        property1NoBorderRadius="10px 10px 0px 0px"
        groupDivWidth="26.32%"
        groupDivRight="70.21%"
        classicRoomColor="#dba156"
        comfortableRoomsWithFontWeight="unset"
        comfortableRoomsWithColor="#a0a0a0"
      />
      <Homemenu
        group23="/group-23@2x.png"
        classicRoom="Classic Room"
        property1NoPosition="absolute"
        property1NoTop="200px"
        property1NoLeft="0px"
        property1NoOverflow="unset"
        property1NoBorderBottom="2px solid #fff"
        property1NoBoxSizing="border-box"
        property1NoBorderRadius="10px"
        groupDivWidth="26.32%"
        groupDivRight="70.21%"
        classicRoomColor="#dba156"
        comfortableRoomsWithFontWeight="unset"
        comfortableRoomsWithColor="#a0a0a0"
      />
      <Homemenuactive
        rectangle14="/rectangle-14@2x.png"
        classicRoom="Deluxe Room"
        group23="/group-23@2x.png"
        property1YesPosition="absolute"
        property1YesTop="401px"
        property1YesLeft="2px"
        property1YesBorderRadius="10px"
        property1YesBorderBottom="2px solid #fff"
        property1YesBoxSizing="border-box"
        classicRoomColor="#fff"
        comfortableRoomsWithColor="#fff"
      />
      <Homemenu
        group23="/group-23@2x.png"
        classicRoom="Family Room"
        property1NoPosition="absolute"
        property1NoTop="604px"
        property1NoLeft="1px"
        property1NoOverflow="hidden"
        property1NoBorderBottom="unset"
        property1NoBoxSizing="unset"
        property1NoBorderRadius="0px 0px 10px 10px"
        groupDivWidth="26.53%"
        groupDivRight="70%"
        classicRoomColor="#dba156"
        comfortableRoomsWithFontWeight="500"
        comfortableRoomsWithColor="#a0a0a0"
      />
    </div>
  );
};

export default HomeMenus;
