const QueenDeluxeCard = () => {
  return (
    <div className="absolute top-[311px] left-[1104px] w-[313px] h-36 text-left text-11xl text-darkslategray-300 font-roboto">
      <div className="absolute top-[0px] left-[0px] capitalize font-medium">
        Queen Deluxe
      </div>
      <div className="absolute top-[60px] left-[0px] w-[304px] h-[35px] text-xl text-dimgray-100">
        <div className="absolute top-[5px] left-[0px] w-[145px] h-[26px]">
          <div className="absolute top-[2px] left-[36px] capitalize font-medium">
            For 2 Adults
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[26px] h-[26px] overflow-hidden object-cover"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[173px] capitalize font-medium text-7xl text-black">
          <span>$ 199/</span>
          <span className="text-11xl text-white">{` `}</span>
          <span className="text-base text-dimgray-100">NIGHT</span>
        </div>
      </div>
      <div className="absolute top-[120px] left-[2px] w-[311px] h-6 text-base text-firebrick">
        <div className="absolute top-[0px] left-[0px] w-[135px] h-6">
          <div className="absolute top-[2px] left-[29px] capitalize">
            Non-Refundale
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden object-cover"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className="absolute top-[3px] left-[173px] capitalize text-dimgray-100 whitespace-pre-wrap">{`+$49  Taxes & Fees`}</div>
      </div>
    </div>
  );
};

export default QueenDeluxeCard;
