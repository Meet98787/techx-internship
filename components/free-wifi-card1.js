import FreeWifiCard from "./free-wifi-card";

const FreeWifiCard1 = () => {
  return (
    <div className="absolute top-[1397px] left-[0px] w-[912px] h-[195px] text-left text-xl text-dimgray-100 font-roboto">
      <FreeWifiCard
        freeWiFi="Free Wi-Fi"
        frame="/frame@2x.png"
        ironlroningBoard="iron/lroning Board"
        frame1="/frame@2x.png"
        bathroom="Bathroom"
        frame2="/frame@2x.png"
        airConditioning="Air Conditioning"
        frame3="/frame@2x.png"
        propLeft="0px"
        propWidth="208px"
        propWidth1="128px"
        propWidth2="208px"
        propWidth3="128px"
        propWidth4="183px"
      />
      <div className="absolute top-[0px] left-[323px] w-[258px] h-[195px]">
        <div className="absolute top-[0px] left-[0px] w-[232px] h-[30px]">
          <div className="absolute top-[3px] left-[40px] capitalize">
            interconnected Room
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <img
          className="absolute top-[55px] left-[0px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/frame@2x.png"
        />
        <div className="absolute top-[58px] left-[40px] w-[218px] h-[78px]">
          <div className="absolute top-[0px] left-[0px] capitalize">
            24- Hour Room Service
          </div>
          <div className="absolute top-[55px] left-[0px] capitalize">
            24- Hour in-Room Dining
          </div>
        </div>
        <img
          className="absolute top-[110px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame@2x.png"
        />
        <div className="absolute top-[165px] left-[0px] w-[164px] h-[30px]">
          <div className="absolute top-[3px] left-[40px] capitalize">
            Mineral Water
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
            alt=""
            src="/frame@2x.png"
          />
        </div>
      </div>
      <FreeWifiCard
        freeWiFi="Electric- Kettle"
        frame="/frame@2x.png"
        ironlroningBoard="Daily Housekeeping"
        frame1="/frame@2x.png"
        bathroom="Laundry Service"
        frame2="/frame@2x.png"
        airConditioning="Balcony"
        frame3="/frame@2x.png"
        propLeft="696px"
        propWidth="216px"
        propWidth1="168px"
        propWidth2="216px"
        propWidth3="182px"
        propWidth4="111px"
      />
    </div>
  );
};

export default FreeWifiCard1;
