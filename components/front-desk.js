import { useMemo } from "react";

const FrontDesk = ({ amenities, amenityTitle, propTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[469px] h-[134px] text-center text-15xl text-dimgray-200 font-roboto"
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[100px] w-[369px] h-[134px]">
        <div className="absolute top-[0px] left-[0px] font-semibold">
          {amenities}
        </div>
        <div className="absolute top-[50px] left-[calc(50%_-_184.5px)] text-lg leading-[28px] text-darkgray-100 text-left inline-block w-[369px]">
          All rooms are air conditioned and feature an elegant ensuite bathroom
          with shower will be can not to come you can not.
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-20 h-20 object-cover"
        alt=""
        src={amenityTitle}
      />
    </div>
  );
};

export default FrontDesk;
