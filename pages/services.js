import { useCallback } from "react";
import { useRouter } from "next/router";
import Hero from "../components/hero";
import Footer from "../components/footer";
import LuxuryRoomsContainer from "../components/luxury-rooms-container";

const Services = () => {
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
    <div className="relative bg-white w-full h-[4418px] overflow-hidden text-left text-sm text-white font-roboto">
      <div className="absolute top-[8245px] left-[calc(50%_-_169px)] font-poppins">
        © 2000-2021, The Kings Squre All Rights Reserved
      </div>
      <Hero />
      <img
        className="absolute top-[100px] left-[0px] w-[1920px] h-[730px] object-contain"
        alt=""
        src="/rectangle-19412@2x.png"
      />
      <div className="absolute top-[100px] left-[-1px] bg-gray-300 w-[1920px] h-[730px]" />
      <Footer />
      <div className="absolute top-[3991.5px] left-[248.5px] box-border w-[1459px] h-px border-t-[1px] border-solid border-gray-100" />
      <div className="absolute top-[379px] left-[calc(50%_-_721px)] w-[458px] h-[171px] text-[70px]">
        <div className="absolute top-[0px] left-[calc(50%_-_229px)] font-semibold inline-block w-[458px] h-[81px]">
          Services
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
        className="absolute top-[853px] left-[1097px] w-[233px] h-[271px] overflow-hidden object-cover"
        alt=""
        src="/palmtrees02-2@2x.png"
      />
      <div className="absolute top-[950px] left-[239px] w-[1441px] h-[2518px] text-xl text-darkgray-100">
        <div className="absolute top-[856px] left-[0px] w-[1441px] h-[378px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-[534px] h-[378px] object-cover"
            alt=""
            src="/rectangle-19423@2x.png"
          />
          <div className="absolute top-[39px] left-[614px] w-[827px] h-[300px]">
            <div className="absolute top-[0px] left-[0px] text-31xl font-extrabold text-darkslategray-100 text-center inline-block w-[366.44px]">
              Holls For Events
            </div>
            <div className="absolute top-[79px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[827px]">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are  anything embarrassing hidden in the middle of text. `}</div>
            <div className="absolute top-[188px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[827px]">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a Lorem free from repetition, injected
              humour, or non-characteristic words etc.
            </div>
          </div>
        </div>
        <div className="absolute top-[1284px] left-[1px] w-[1440px] h-[378px]">
          <img
            className="absolute top-[0px] left-[906px] rounded-3xs w-[534px] h-[378px] object-cover"
            alt=""
            src="/rectangle-19424@2x.png"
          />
          <div className="absolute top-[39px] left-[0px] w-[826px] h-[300px]">
            <div className="absolute top-[0px] left-[0px] text-31xl font-extrabold text-darkslategray-100 text-center inline-block w-[260.68px]">
              Conference
            </div>
            <div className="absolute top-[79px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[826px]">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are  anything embarrassing hidden in the middle of text. `}</div>
            <div className="absolute top-[188px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[826px]">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 2 Latin
              words, combined with a Lorem free from repetition, injected
              humour, or non-characteristic words etc.
            </div>
          </div>
        </div>
        <div className="absolute top-[2140px] left-[1px] w-[1440px] h-[378px]">
          <img
            className="absolute top-[0px] left-[906px] rounded-3xs w-[534px] h-[378px] object-cover"
            alt=""
            src="/rectangle-19426@2x.png"
          />
          <div className="absolute top-[39px] left-[0px] text-31xl font-extrabold text-darkslategray-100 text-center inline-block w-[345px]">
            Special Rooms
          </div>
          <div className="absolute top-[118px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[826px]">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are  anything embarrassing hidden in the middle of text. `}</div>
          <div className="absolute top-[227px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[826px]">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 2 Latin words,
            combined with a Lorem free from repetition, injected humour, or
            non-characteristic words etc.
          </div>
        </div>
        <div className="absolute top-[1712px] left-[0px] w-[1440px] h-[378px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-3xs w-[534px] h-[378px] object-cover"
            alt=""
            src="/rectangle-19425@2x.png"
          />
          <div className="absolute top-[39px] left-[614px] w-[826px] h-[300px]">
            <div className="absolute top-[0px] left-[9px] text-31xl font-extrabold text-darkslategray-100 text-center">
              Living Rooms
            </div>
            <div className="absolute top-[79px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[826px]">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are  anything embarrassing hidden in the middle of text. `}</div>
            <div className="absolute top-[188px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[826px]">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a Lorem free from repetition, injected
              humour, or non-characteristic words etc.
            </div>
          </div>
        </div>
        <LuxuryRoomsContainer />
      </div>
    </div>
  );
};

export default Services;
