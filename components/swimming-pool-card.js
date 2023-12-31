import FrontDesk from "./front-desk";

const SwimmingPoolCard = () => {
  return (
    <div className="absolute top-[160px] left-[971px] w-[469px] h-[562px] text-center text-15xl text-dimgray-200 font-roboto">
      <FrontDesk
        amenities="Swimming Pool"
        amenityTitle="/group-1000004137@2x.png"
        propTop="0px"
      />
      <div className="absolute top-[428px] left-[0px] w-[469px] h-[134px]">
        <div className="absolute top-[0px] left-[100px] w-[369px] h-[134px]">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Room Cleaning
          </div>
          <div className="absolute top-[50px] left-[calc(50%_-_184.5px)] text-lg leading-[28px] text-darkgray-100 text-left inline-block w-[369px]">
            All rooms are air conditioned and feature an elegant ensuite
            bathroom with shower will be can not to come you can not.
          </div>
        </div>
        <div className="absolute h-[59.7%] w-[17.06%] top-[0%] right-[82.94%] bottom-[40.3%] left-[0%]">
          <img
            className="absolute h-[62.5%] w-[62.5%] top-[18.75%] right-[18.75%] bottom-[18.75%] left-[18.75%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/group@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] rounded-31xl box-border w-20 h-20 border-[1px] border-solid border-sandybrown" />
        </div>
      </div>
      <FrontDesk
        amenities="Luggage Storage"
        amenityTitle="/group-1000004138@2x.png"
        propTop="214px"
      />
    </div>
  );
};

export default SwimmingPoolCard;
