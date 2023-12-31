import { useCallback } from "react";
import Hero from "../components/hero";
import PickUpDropSection from "../components/pick-up-drop-section";
import ChickenSandwichForm from "../components/chicken-sandwich-form";
import Footer from "../components/footer";

const ServicesDetails = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    // Please sync "About US" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Rooms" to the project
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    // Please sync "Events" to the project
  }, []);

  const onServicesTextClick = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onFrameContainer5Click = useCallback(() => {
    // Please sync "Contact-Us" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[4065px] overflow-hidden text-left text-31xl text-white font-roboto">
      <div className="absolute top-[8245px] left-[calc(50%_-_169px)] text-sm font-poppins">
        © 2000-2021, The Kings Squre All Rights Reserved
      </div>
      <Hero />
      <img
        className="absolute top-[100px] left-[0px] w-[1920px] h-[730px] object-contain"
        alt=""
        src="/rectangle-19412@2x.png"
      />
      <div className="absolute top-[100px] left-[-1px] bg-gray-600 w-[1920px] h-[730px]" />
      <PickUpDropSection />
      <div className="absolute top-[2570px] left-[calc(50%_-_720px)] w-[1440px] h-[545px] text-center text-darkslategray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_256px)] w-[513px] h-[102px]">
          <div className="absolute top-[0px] left-[calc(50%_-_256.5px)] font-semibold">
            <span>{`Delicious `}</span>
            <span className="text-sandybrown">Food Forever</span>
          </div>
          <div className="absolute top-[74px] left-[85px] w-[342px] h-7 text-left text-lg text-dimgray">
            <div className="absolute top-[0px] left-[0px] leading-[28px] font-medium text-sandybrown">{`Salads `}</div>
            <div className="absolute top-[0px] left-[86px] leading-[28px] font-medium">{`Dessert `}</div>
            <div className="absolute top-[0px] left-[181px] leading-[28px] font-medium">{`Stater `}</div>
            <div className="absolute top-[0px] left-[261px] leading-[28px] font-medium">{`Main Dish `}</div>
          </div>
        </div>
        <div className="absolute top-[132px] left-[0px] w-[1440px] h-[413px]">
          <ChickenSandwichForm
            sandwichType="/ellipse-35@2x.png"
            sandwichImageName="Chicken Sandwich"
            propLeft="0px"
            propWidth="67.25%"
            propRight="16.23%"
            propWidth1="94.83%"
            propRight1="3.02%"
            propLeft1="2.16%"
            propLeft2="3.88%"
            propLeft3="42.24%"
          />
          <ChickenSandwichForm
            sandwichType="/ellipse-35@2x.png"
            sandwichImageName="Vegetable Sandwich"
            propLeft="365px"
            propWidth="70.72%"
            propRight="12.75%"
            propWidth1="90.16%"
            propRight1="7.79%"
            propLeft1="2.05%"
            propLeft2="3.69%"
            propLeft3="40.16%"
          />
          <ChickenSandwichForm
            sandwichType="/ellipse-35@2x.png"
            sandwichImageName="Chicken Grill"
            propLeft="730px"
            propWidth="67.25%"
            propRight="16.23%"
            propWidth1="94.83%"
            propRight1="3.02%"
            propLeft1="2.16%"
            propLeft2="3.88%"
            propLeft3="42.24%"
          />
          <ChickenSandwichForm
            sandwichType="/ellipse-35@2x.png"
            sandwichImageName="Italian Sandwich"
            propLeft="1095px"
            propWidth="67.25%"
            propRight="16.23%"
            propWidth1="94.83%"
            propRight1="3.02%"
            propLeft1="2.16%"
            propLeft2="3.88%"
            propLeft3="42.24%"
          />
        </div>
      </div>
      <div className="absolute top-[950px] left-[calc(50%_-_721px)] w-[1442px] h-[1057px] text-darkslategray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_721px)] capitalize font-semibold">
          <span>{`pushing The Work And the `}</span>
          <span className="text-sandybrown">World forward</span>
        </div>
        <img
          className="absolute top-[89px] left-[1px] rounded-3xs w-[1440px] h-[771px] object-cover"
          alt=""
          src="/rectangle-19442@2x.png"
        />
        <div className="absolute top-[945px] left-[1px] text-xl leading-[28px] text-darkgray-100 inline-block w-[1441px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend tor on the Internet.
          It uses a dictionary ofgenerated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </div>
        <div className="absolute top-[890px] left-[1px] w-[501px] h-[35px] text-[30px] text-gray-200">
          <div className="absolute top-[17.5px] left-[-0.5px] box-border w-[332px] h-px border-t-[1px] border-solid border-gray-200" />
          <div className="absolute top-[0px] left-[351px] capitalize font-medium">
            Since 1988
          </div>
        </div>
      </div>
      <Footer />
      <div className="absolute top-[3617.5px] left-[247.5px] box-border w-[1459px] h-px border-t-[1px] border-solid border-gray-300" />
      <div className="absolute top-[379px] left-[calc(50%_-_721px)] w-[525px] h-[171px] text-[70px]">
        <div className="absolute top-[0px] left-[calc(50%_-_262.5px)] font-semibold inline-block w-[525px] h-[81px]">
          Services Details
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
        className="absolute top-[843px] left-[1148px] w-[233px] h-[271px] overflow-hidden object-cover"
        alt=""
        src="/palmtrees02-2@2x.png"
      />
    </div>
  );
};

export default ServicesDetails;
