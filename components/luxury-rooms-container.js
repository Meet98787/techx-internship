import { useCallback } from "react";

const LuxuryRoomsContainer = () => {
  const onFrameContainer31Click = useCallback(() => {
    // Please sync "Services Details" to the project
  }, []);

  return (
    <div className="absolute top-[0px] left-[0px] w-[1441px] h-[806px] text-left text-xl text-darkgray-100 font-roboto">
      <div className="absolute top-[0px] left-[1px] w-[1440px] h-[378px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-[534px] h-[378px] object-cover"
          alt=""
          src="/rectangle-19365@2x.png"
        />
        <div className="absolute top-[39px] left-[614px] w-[826px] h-[300px]">
          <div className="absolute top-[0px] left-[0px] text-31xl font-extrabold text-darkslategray-100 text-center">
            Luxury Rooms
          </div>
          <div className="absolute top-[79px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[826px]">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are  anything embarrassing hidden in the middle of text. `}</div>
          <div className="absolute top-[188px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[826px]">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a Lorem free from repetition, injected humour, or
            non-characteristic words etc.
          </div>
        </div>
      </div>
      <img
        className="absolute top-[428px] left-[907px] rounded-3xs w-[534px] h-[378px] object-cover"
        alt=""
        src="/rectangle-19422@2x.png"
      />
      <div className="absolute top-[467px] left-[0px] w-[827px] h-[310px]">
        <div className="absolute top-[0px] left-[1px] w-[826px] h-[244px]">
          <div className="absolute top-[0px] left-[9px] text-31xl font-extrabold text-darkslategray-100 text-center">
            International Foods
          </div>
          <div className="absolute top-[79px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[826px]">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are  anything embarrassing hidden in the middle of text. `}</div>
          <div className="absolute top-[188px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[826px]">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as free from repetition, injected humour, or
            non-characteristic words etc.
          </div>
        </div>
        <div
          className="absolute top-[259px] left-[0px] rounded-3xs bg-sandybrown w-[158px] h-[51px] flex flex-row items-center justify-center py-[15px] px-9 box-border cursor-pointer text-lg text-white"
          onClick={onFrameContainer31Click}
        >
          <div className="relative font-semibold">{`View More `}</div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryRoomsContainer;
