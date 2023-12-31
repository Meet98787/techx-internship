import { useCallback } from "react";
import { useRouter } from "next/router";
import BookingFormContainer from "../components/booking-form-container";
import Footer from "../components/footer";
import Header from "../components/header";
import FormContainer1 from "../components/form-container1";
import Headerall from "../components/headerall";

const Events = () => {
  const router = useRouter();

  const onFrameContainer14Click = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    // Please sync "About US" to the project
  }, []);

  const onFrameContainer16Click = useCallback(() => {
    // Please sync "Rooms" to the project
  }, []);

  const onFrameContainer17Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onServicesText1Click = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onFrameContainer19Click = useCallback(() => {
    // Please sync "Contact-Us" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[4618px] overflow-hidden text-left text-sm text-white font-roboto">
      <div className="absolute top-[8245px] left-[calc(50%_-_169px)] font-poppins">
        © 2000-2021, The Kings Squre All Rights Reserved
      </div>
      <img
        className="absolute top-[100px] left-[0px] w-[1920px] h-[730px] object-contain"
        alt=""
        src="/rectangle-19412@2x.png"
      />
      <div className="absolute top-[100px] left-[-1px] bg-gray-300 w-[1921px] h-[730px]" />
      <div className="absolute top-[950px] left-[calc(50%_-_720px)] w-[1441px] h-[1244px] text-center text-xl text-darkgray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_381.5px)] w-[762px] h-[130px]">
          <div className="absolute top-[74px] left-[calc(50%_-_381px)] leading-[28px] inline-block w-[762px]">
            All rooms are air conditioned and feature an elegant ensuite
            bathroom with shower will be can not to come did not beckon you can
            not.
          </div>
          <div className="absolute top-[0px] left-[calc(50%_-_251px)] text-31xl font-semibold text-darkslategray-100">
            <span>{`Experience Our `}</span>
            <span className="text-sandybrown">Events</span>
          </div>
        </div>
        <BookingFormContainer />
      </div>
      <Footer />
      <div className="absolute top-[4330.5px] left-[253.5px] box-border w-[1459px] h-px border-t-[1px] border-solid border-gray-100" />
      <div className="absolute top-[379px] left-[calc(50%_-_721px)] w-56 h-[171px] text-[70px]">
        <div className="absolute top-[0px] left-[calc(50%_-_112px)] font-semibold inline-block w-56 h-[81px]">
          Events
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
      <img
        className="absolute top-[844px] left-[1142px] w-[233px] h-[271px] overflow-hidden object-cover"
        alt=""
        src="/palmtrees02-2@2x.png"
      />
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
      <FormContainer1 />
    </div>
  );
};

export default Events;
