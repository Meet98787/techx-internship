const HomeAbout = () => {
  return (
    <div className="absolute top-[1048px] left-[240px] w-[1440px] h-[715px] text-center text-xl text-darkgray-100 font-roboto">
      <div className="absolute top-[0px] left-[0px] w-[729px] h-[715px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-[566px] h-[646px] object-cover"
          alt=""
          src="/rectangle-7@2x.png"
        />
        <div className="absolute top-[258px] left-[319px] w-[410px] h-[457px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-[410px] h-[457px] border-[4px] border-solid border-sandybrown" />
          <img
            className="absolute top-[15px] left-[14px] rounded-3xs w-[381px] h-[427px] object-cover"
            alt=""
            src="/rectangle-8@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[129px] left-[832px] w-[608px] h-[458px]">
        <div className="absolute top-[0px] left-[0px] w-[348px] h-[23px] text-sandybrown">
          <div className="absolute top-[0px] left-[124px] tracking-[0.03em] font-semibold">
            ABOUT US
          </div>
          <img
            className="absolute top-[12px] left-[232px] max-h-full w-[116px] object-cover"
            alt=""
            src="/line-1@2x.png"
          />
          <img
            className="absolute top-[12px] left-[0px] max-h-full w-[116px] object-contain"
            alt=""
            src="/line-3@2x.png"
          />
        </div>
        <div className="absolute top-[33px] left-[0px] text-31xl font-semibold text-darkslategray-100">
          <span>{`At Diamond `}</span>
          <span className="text-sandybrown">{`Luxury Hotels `}</span>
        </div>
        <div className="absolute top-[107px] left-[0px] leading-[28px] whitespace-pre-wrap text-left inline-block w-[607px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </div>
        <div className="absolute top-[290px] left-[0px] leading-[28px] text-left inline-block w-[608px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use.
        </div>
      </div>
      <div className="absolute top-[601.5px] left-[862px] text-lg font-semibold text-white text-left">
        Read More
      </div>
      <img
        className="absolute h-[1.96%] w-[0.49%] top-[84.62%] right-[31.53%] bottom-[13.43%] left-[67.99%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/icon@2x.png"
      />
    </div>
  );
};

export default HomeAbout;
