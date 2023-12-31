import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "./header";

const Hero = () => {
  const router = useRouter();

  const onFrameContainer8Click = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onAboutUsText1Click = useCallback(() => {
    // Please sync "About US" to the project
  }, []);

  const onFrameContainer10Click = useCallback(() => {
    // Please sync "Rooms" to the project
  }, []);

  const onFrameContainer11Click = useCallback(() => {
    // Please sync "Events" to the project
  }, []);

  const onServicesText1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainer13Click = useCallback(() => {
    // Please sync "Contact-Us" to the project
  }, []);

  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[100px] text-left text-lg text-darkslategray-100 font-roboto">
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[100px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1920px] h-[100px]" />
        <div className="absolute top-[6px] left-[240px] w-[1440px] h-[88px]">
          <img
            className="absolute top-[0px] left-[0px] w-[259px] h-[88px] object-cover"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="absolute top-[24px] left-[calc(50%_-_332.5px)] flex flex-row items-start justify-start gap-[20px]">
            <div className="shrink-0 flex flex-row items-center justify-center p-2.5">
              <div className="relative font-medium">Home</div>
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center p-2.5">
              <div className="relative font-medium">About Us</div>
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center p-2.5">
              <div className="relative font-medium">Rooms</div>
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center p-2.5">
              <div className="relative font-medium">{`Events `}</div>
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center p-2.5 text-sandybrown">
              <div className="relative font-semibold">{`Services `}</div>
            </div>
            <div className="shrink-0 flex flex-row items-center justify-center p-2.5">
              <div className="relative font-medium">{`Contact-Us `}</div>
            </div>
          </div>
          <div className="absolute top-[24px] left-[1297px] rounded-3xs bg-sandybrown flex flex-row items-center justify-center py-[15px] px-[30px] text-white">
            <div className="relative font-semibold">Book Now</div>
          </div>
        </div>
        <Header
          image2="/image-2@2x.png"
          frameDivPosition="absolute"
          frameDivTop="6px"
          frameDivLeft="240px"
          frameDivBackgroundColor="#fff"
          homeFontWeight="unset"
          homeColor="#2d2d2d"
          aboutUsColor="#2d2d2d"
          roomsColor="#2d2d2d"
          eventsColor="#2d2d2d"
          servicesColor="#febe40"
          servicesFontWeight="600"
          contactUsColor="#2d2d2d"
          onFrameContainerClick={onFrameContainer8Click}
          onAboutUsTextClick={onAboutUsText1Click}
          onFrameContainer2Click={onFrameContainer10Click}
          onFrameContainer3Click={onFrameContainer11Click}
          onServicesTextClick={onServicesText1Click}
          onFrameContainer5Click={onFrameContainer13Click}
        />
      </div>
    </div>
  );
};

export default Hero;
