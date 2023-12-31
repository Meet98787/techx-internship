import FrontDesk from "./front-desk";
import FreeWifiAllRoomsContainer from "./free-wifi-all-rooms-container";

const FrontDesk24HourContainer1 = () => {
  return (
    <div className="absolute top-[160px] left-[0px] w-[471px] h-[562px] text-center text-15xl text-dimgray-200 font-roboto">
      <FrontDesk
        amenities="Front Desk 24- Hour"
        amenityTitle="/group-1000004134@2x.png"
        propTop="0px"
      />
      <FreeWifiAllRoomsContainer
        amenities="Free Wi-Fi All Rooms!"
        roomAmenities="/group-1000004135@2x.png"
        propTop="214px"
        propLeft="calc(50% - 133.5px)"
      />
      <FreeWifiAllRoomsContainer
        amenities={`Gym & Spa`}
        roomAmenities="/group-1000004136@2x.png"
        propTop="428px"
        propLeft="calc(50% - 134.5px)"
      />
    </div>
  );
};

export default FrontDesk24HourContainer1;
