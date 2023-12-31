import { useCallback } from "react";
import { useRouter } from "next/router";
import Homeservices from "../components/homeservices";
import Footer from "../components/footer";
import Header from "../components/header";
import VisionSection from "../components/vision-section";
import Headerall from "../components/headerall";

const AboutUS = () => {
  const router = useRouter();

  const onFrameContainer15Click = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onAboutUsText1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainer17Click = useCallback(() => {
    // Please sync "Rooms" to the project
  }, []);

  const onFrameContainer18Click = useCallback(() => {
    // Please sync "Events" to the project
  }, []);

  const onServicesText1Click = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onFrameContainer20Click = useCallback(() => {
    // Please sync "Contact-Us" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[5864px] overflow-hidden text-left text-11xl text-dimgray-200 font-roboto">
      <img
        className="absolute top-[100px] left-[0px] w-[1920px] h-[730px] object-contain"
        alt=""
        src="/rectangle-19412@2x.png"
      />
      <div className="absolute top-[8245px] left-[calc(50%_-_169px)] text-sm font-poppins text-white">
        © 2000-2021, The Kings Squre All Rights Reserved
      </div>
      <div className="absolute top-[2042px] left-[-2250px] bg-white box-border w-[1920px] h-[100px] border-[1px] border-solid border-lightgray" />
      <div className="absolute top-[950px] left-[240px] w-[1680px] h-[964px] text-xl text-darkslategray-100">
        <img
          className="absolute top-[0px] left-[751.21px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs w-[928.79px] h-[964px] object-cover"
          alt=""
          src="/rectangle-19406@2x.png"
        />
        <img
          className="absolute top-[298px] left-[0px] rounded-3xs w-[706.32px] h-[666px] object-cover"
          alt=""
          src="/rectangle-19407@2x.png"
        />
        <b className="absolute top-[51px] left-[0px] text-31xl capitalize inline-block w-[567.65px]">
          <span>{`Welcome To The Hotel kings `}</span>
          <span className="text-sandybrown">Square Palace</span>
        </b>
        <div className="absolute top-[184px] left-[calc(50%_-_840px)] leading-[28px] text-darkgray-100 inline-block w-[652.45px]">
          All rooms are air conditioned and feature an elegant ensuite bathroom
          with shower will be can not to come did not beckon you can not.reader
          will be distracted by the readable content of a page when will be come
          to.
        </div>
        <b className="absolute top-[18px] left-[0px] inline-block text-sandybrown w-72">
          5 STAR HOTEL IN DUBAI, UAE
        </b>
      </div>
      <div className="absolute top-[100px] left-[0px] bg-gray-300 w-[1920px] h-[730px]" />
      <img
        className="absolute top-[2609px] left-[1214px] w-[233px] h-[271px] overflow-hidden object-cover"
        alt=""
        src="/palmtrees02-1@2x.png"
      />
      <img
        className="absolute h-[4.46%] w-[18.16%] top-[48.4%] right-[83.85%] bottom-[47.14%] left-[-2.01%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/group@2x.png"
      />
      <div className="absolute top-[2194px] left-[239px] rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.06)] box-border w-[467px] h-[408px] border-[1px] border-solid border-sandybrown" />
      <div className="absolute top-[2194px] left-[726px] rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.06)] box-border w-[467px] h-[408px] border-[1px] border-solid border-sandybrown" />
      <div className="absolute top-[2194px] left-[1213px] rounded-3xs bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.06)] box-border w-[467px] h-[408px] border-[1px] border-solid border-sandybrown" />
      <img
        className="absolute top-[2009px] left-[304px] w-[120px] h-[99px] object-cover"
        alt=""
        src="/group-1000004122@2x.png"
      />
      <div className="absolute top-[2034px] left-[calc(50%_-_496px)] w-[993px] h-[130px] text-31xl text-darkslategray-100">
        <b className="absolute top-[0px] left-[calc(50%_-_496.5px)] capitalize inline-block w-[993px]">
          <span>{`Welcome To The Hotel Kings `}</span>
          <span className="text-sandybrown">Square Palace</span>
        </b>
        <div className="absolute top-[74px] left-[calc(50%_-_380.5px)] text-xl leading-[28px] text-darkgray-100 text-center inline-block w-[762px]">
          All rooms are air conditioned and feature an elegant ensuite bathroom
          with shower will be can not to come did not beckon you can not.
        </div>
      </div>
      <div className="absolute top-[380px] left-[calc(50%_-_720px)] w-72 h-[171px] text-[70px] text-white">
        <div className="absolute top-[0px] left-[calc(50%_-_144px)] font-semibold inline-block w-72 h-[81px]">
          About Us
        </div>
        <div className="absolute top-[121px] left-[0px] rounded-3xs bg-sandybrown flex flex-col items-start justify-start py-[13px] px-[30px] text-lg">
          <div className="shrink-0 flex flex-row items-center justify-start gap-[10px]">
            <div className="relative font-semibold">Scroll - Down</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[2722px] left-[240px] w-[1440px] h-[971px]">
        <Homeservices />
      </div>
      <img
        className="absolute h-[4%] w-[17.65%] top-[14.82%] right-[83.34%] bottom-[81.18%] left-[-0.99%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/group@2x.png"
      />
      <div className="absolute top-[2250px] left-[303px] w-[339px] h-[296px] text-center">
        <b className="absolute top-[226px] left-[0px] capitalize inline-block w-[339px]">
          Editor’s Choice For Hotel Brand For Service
        </b>
        <img
          className="absolute top-[0px] left-[58px] w-[206px] h-[206px] object-cover"
          alt=""
          src="/group-1000004520@2x.png"
        />
      </div>
      <div className="absolute top-[2250px] left-[790px] w-[339px] h-[296px] text-center">
        <b className="absolute top-[226px] left-[0px] capitalize inline-block w-[339px]">{`Best Hotel In The World (Ranked 1St) `}</b>
        <img
          className="absolute top-[0px] left-[58px] w-[206px] h-[206px] overflow-hidden object-cover"
          alt=""
          src="/frame@2x.png"
        />
      </div>
      <div className="absolute top-[2250px] left-[1277px] w-[339px] h-[296px] text-center">
        <b className="absolute top-[226px] left-[0px] capitalize inline-block w-[339px]">{`Best City Hotel In The Asia (Ranked 1St) `}</b>
        <img
          className="absolute top-[0px] left-[74px] w-[206px] h-[206px] overflow-hidden object-cover"
          alt=""
          src="/frame@2x.png"
        />
      </div>
      <Footer />
      <Headerall
        image2="/image-2@2x.png"
        frameDivPosition="absolute"
        frameDivTop="6px"
        frameDivLeft="240px"
        frameDivBackgroundColor="#fff"
        homeFontWeight="unset"
        homeColor="#2d2d2d"
        aboutUsColor="#febe40"
        aboutUsFontWeight="600"
        roomsColor="#2d2d2d"
        eventsColor="#2d2d2d"
        servicesColor="#2d2d2d"
        contactUsColor="#2d2d2d"
        onFrameContainerClick={onFrameContainer15Click}
        onAboutUsTextClick={onAboutUsText1Click}
        onFrameContainer2Click={onFrameContainer17Click}
        onFrameContainer3Click={onFrameContainer18Click}
        onServicesTextClick={onServicesText1Click}
        onFrameContainer5Click={onFrameContainer20Click}
      />
      <div className="absolute top-[4208px] left-[803px] rounded-tl-[215px] rounded-tr-none rounded-br-none rounded-bl-3xs bg-white w-[345px] h-[587px]" />
      <VisionSection />
      <Footer />
    </div>
    
  );
};

export default AboutUS;
