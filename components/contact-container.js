const ContactContainer = () => {
  return (
    <div className="absolute top-[950px] left-[calc(50%_-_720px)] w-[1440px] h-[647px] text-center text-lg text-darkslategray-100 font-roboto">
      <div className="absolute top-[0px] left-[calc(50%_-_141px)] text-31xl font-semibold">
        CONTACT US
      </div>
      <div className="absolute top-[74px] left-[345px] text-xl leading-[28px] text-darkgray-100 whitespace-pre-wrap inline-block w-[798px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been standard the typesetting, remaining
        essentially unchanged.
      </div>
      <img
        className="absolute top-[160px] left-[0px] rounded-3xs w-[730px] h-[487px] object-contain"
        alt=""
        src="/rectangle-19385@2x.png"
      />
      <div className="absolute top-[186px] left-[800px] w-[640px] h-[376px] text-gray-200">
        <div className="absolute top-[1px] left-[0px] w-[303px] h-[60px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-[303px] h-[60px] border-[1px] border-solid border-peru" />
          <div className="absolute top-[19px] left-[20px]">First Name</div>
        </div>
        <div className="absolute top-[0px] left-[337px] w-[303px] h-[60px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-[303px] h-[60px] border-[1px] border-solid border-peru" />
          <div className="absolute top-[19px] left-[20px] whitespace-pre-wrap">
            Last Name
          </div>
        </div>
        <div className="absolute top-[91px] left-[0px] w-[640px] h-[60px]">
          <div className="absolute top-[0px] left-[0px] rounded-4xs bg-white box-border w-[640px] h-[60px] border-[1px] border-solid border-peru" />
          <div className="absolute top-[20px] left-[20px]">Your Email</div>
        </div>
        <div className="absolute top-[181px] left-[0px] w-[640px] h-[195px]">
          <div className="absolute top-[0px] left-[0px] rounded-4xs bg-white box-border w-[640px] h-[195px] border-[1px] border-solid border-peru" />
          <div className="absolute top-[20px] left-[20px]">
            Type your message
          </div>
        </div>
      </div>
      <div className="absolute top-[596px] left-[804px] rounded-3xs bg-sandybrown flex flex-row items-center justify-center py-[15px] px-9 text-left text-white">
        <div className="relative font-semibold">{`Send `}</div>
      </div>
    </div>
  );
};

export default ContactContainer;
