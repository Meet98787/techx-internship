import { useCallback } from "react";
import { useRouter } from "next/router";
import SelectRoom from "../components/select-room";
import FrontDesk24HourContainer1 from "../components/front-desk24-hour-container1";
import SwimmingPoolCard from "../components/swimming-pool-card";
import Header from "../components/header";
import Footer from "../components/footer";
import QueenDeluxeCard from "../components/queen-deluxe-card";
import FreeWifiCard1 from "../components/free-wifi-card1";
import Headerall from "../components/headerall";

const Rooms = () => {
  const router = useRouter();

  const onFrameContainer9Click = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    // Please sync "About US" to the project
  }, []);

  const onFrameContainer11Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainer12Click = useCallback(() => {
    // Please sync "Events" to the project
  }, []);

  const onServicesTextClick = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onFrameContainer14Click = useCallback(() => {
    // Please sync "Contact-Us" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[6217px] overflow-hidden text-left text-sm text-white font-roboto">
      <div className="absolute top-[8245px] left-[calc(50%_-_170px)] font-poppins">
        © 2000-2021, The Kings Squre All Rights Reserved
      </div>
      <div className="absolute top-[2042px] left-[-2250px] bg-white box-border w-[1920px] h-[100px] border-[1px] border-solid border-lightgray-100" />
      <div className="absolute top-[100px] left-[0px] w-[1920px] h-[730px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[730px] object-contain"
          alt=""
          src="/rectangle-19412@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[1920px] h-[730px]" />
      </div>
      <div className="absolute top-[950px] left-[230px] flex flex-col items-start justify-start gap-[30px]">
        <SelectRoom
          roomTypeLabel="/rectangle-19414@2x.png"
          roomTypeDescription="Presidential"
          occupancyLabel="4 Persons"
          lineImageId="/line-6@2x.png"
          componentLabel="/group-1000004113@2x.png"
          roomImageId="/rectangle-19414@2x.png"
          roomTypeImage="Family Suite"
          personCountLabel="5 Persons"
          lineImageIdLabel="/line-6@2x.png"
          componentImageId="/group-1000004113@2x.png"
          imageLabel="/rectangle-19414@2x.png"
          roomTypeImageAltText="Executive Room"
          lineImageAltText="/line-6@2x.png"
          roomTypeImageAltText2="/group-1000004113@2x.png"
          roomCapacityBackgroundColor="#fff"
          groupDivColor="#dba156"
          rectangleIconColor="#545454"
          personsColor="#545454"
        />
        <SelectRoom
          roomTypeLabel="/rectangle-19414@2x.png"
          roomTypeDescription="Deluxe Room"
          occupancyLabel="2 Persons"
          lineImageId="/line-6@2x.png"
          componentLabel="/group-1000004113@2x.png"
          roomImageId="/rectangle-19414@2x.png"
          roomTypeImage="Superior"
          personCountLabel="3 Persons"
          lineImageIdLabel="/line-6@2x.png"
          componentImageId="/group-1000004113@2x.png"
          imageLabel="/rectangle-19414@2x.png"
          roomTypeImageAltText="Flexi Room"
          lineImageAltText="/line-6@2x.png"
          roomTypeImageAltText2="/group-1000004113@2x.png"
          roomCapacityBackgroundColor="#dba156"
          groupDivColor="#fff"
          rectangleIconColor="#fff"
          personsColor="#fff"
        />
      </div>
      <div className="absolute top-[2552px] left-[calc(50%_-_720px)] w-[1440px] h-[722px] text-center text-31xl text-darkslategray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_421px)] font-semibold">
          <span>{`The Kings Square Awesome `}</span>
          <span className="text-sandybrown">{`Facilities `}</span>
        </div>
        <div className="absolute top-[159px] left-[calc(50%_-_193px)] w-[385px] h-[509px]">
          <div className="absolute top-[0px] left-[calc(50%_-_192.5px)] w-[359.86px] h-[509px]">
            <img
              className="absolute top-[11.64px] left-[calc(50%_-_167.67px)] rounded-t-254xl-5 rounded-b-254xl w-[335.34px] h-[485.72px] object-cover"
              alt=""
              src="/rectangle-19422@2x.png"
            />
            <div className="absolute top-[0px] left-[calc(50%_-_179.93px)] rounded-t-274xl-5 rounded-br-274xl-5 rounded-bl-[293px] box-border w-[359.86px] h-[509px] border-[3px] border-solid border-sandybrown" />
          </div>
          <img
            className="absolute top-[257.2px] left-[calc(50%_+_19px)] rounded-t-254xl-5 rounded-br-254xl-5 rounded-bl-[272px] w-[173.5px] h-[251.13px] object-cover"
            alt=""
            src="/rectangle-19423@2x.png"
          />
        </div>
        <FrontDesk24HourContainer1 />
        <SwimmingPoolCard />
        <div className="absolute top-[69px] left-[calc(50%_-_400px)] text-xl leading-[28px] text-darkgray-100 inline-block w-[762px]">
          All rooms are air conditioned and feature an elegant ensuite bathroom
          with shower will be can not to come did not beckon you can not.
        </div>
      </div>
      <header className="absolute top-[6px] left-[240px] w-[1481px] h-[88px]">
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
      </header>
      <Footer />
      <div className="absolute top-[5769.5px] left-[255.5px] box-border w-[1459px] h-px border-t-[1px] border-solid border-gray-100" />
      <div className="absolute top-[7682.5px] left-[255.01px] box-border w-[1459px] h-px border-t-[1px] border-solid border-gray-100" />
      <div className="absolute top-[380px] left-[calc(50%_-_720px)] w-[227px] h-[171px] text-[70px]">
        <div className="absolute top-[0px] left-[calc(50%_-_113.5px)] font-semibold inline-block w-[227px] h-[81px]">
          Rooms
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
        className="absolute top-[818px] left-[165px] w-[150.6px] h-[140.44px] object-contain"
        alt=""
        src="/group-1000004122@2x.png"
      />
      <img
        className="absolute top-[2446px] left-[1291px] w-[233px] h-[271px] overflow-hidden object-cover"
        alt=""
        src="/palmtrees02-1@2x.png"
      />
      <div className="absolute top-[3394px] left-[calc(50%_-_720px)] w-[1441px] h-[1873px] text-xl text-dimgray-100">
        <div className="absolute top-[89px] left-[calc(50%_-_226.5px)] text-31xl capitalize font-semibold text-darkslategray-100">
          <span>Queen classic</span>
          <span className="text-gray-300">{` `}</span>
          <span className="text-sandybrown">Room</span>
        </div>
        <div className="absolute top-[857px] left-[calc(50%_-_719.5px)] text-31xl capitalize font-semibold text-darkslategray-100">
          <span>{`about Royal Queen Classic Beach `}</span>
          <span className="text-sandybrown">Resort Room</span>
        </div>
        <img
          className="absolute top-[271px] left-[1px] rounded-3xs w-[588px] h-[538px] object-cover"
          alt=""
          src="/rectangle-19416@2x.png"
        />
        <img
          className="absolute top-[271px] left-[609px] rounded-3xs w-[452px] h-[259px] object-cover"
          alt=""
          src="/rectangle-19417@2x.png"
        />
        <img
          className="absolute top-[550px] left-[609px] rounded-3xs w-[452px] h-[259px] object-cover"
          alt=""
          src="/rectangle-19418@2x.png"
        />
        <div className="absolute top-[271px] left-[1081px] rounded-3xs bg-whitesmoke w-[360px] h-[538px]" />
        <div className="absolute top-[494.75px] left-[1080.75px] box-border w-[360.5px] h-[0.5px] border-t-[0.5px] border-solid border-dimgray-100" />
        <QueenDeluxeCard />
        <div className="absolute top-[525px] left-[1104px] w-[294px] h-[130px]">
          <div className="absolute top-[0px] left-[0px] w-[294px] h-[30px]">
            <div className="absolute top-[3px] left-[40px] capitalize">
              1 king Bed or 2 Twin Bed (s)
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
          <div className="absolute top-[50px] left-[1px] w-32 h-[30px]">
            <div className="absolute top-[3px] left-[40px] capitalize">
              538 SQ.Ft
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
          <div className="absolute top-[100px] left-[1px] w-[153px] h-[30px]">
            <div className="absolute top-[3px] left-[40px] capitalize">
              Garden View
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[718px] left-[1081px] rounded-t-none rounded-b-3xs bg-burlywood w-[360px] h-[91px]" />
        <div className="absolute top-[750px] left-[1198px] text-5xl capitalize font-semibold text-white">
          Book Now
        </div>
        <div className="absolute top-[163px] left-[calc(50%_-_380.5px)] leading-[28px] text-darkgray-100 text-center inline-block w-[762px]">
          All rooms are air conditioned and feature an elegant ensuite bathroom
          with shower will be can not to come did not beckon you can not.
        </div>
        <div className="absolute top-[38.12%] left-[18.46%] text-31xl font-semibold text-white">
          Classic Room
        </div>
        <div className="absolute top-[931px] left-[1px] leading-[28px] text-darkgray-100 inline-block w-[1440px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </div>
        <img
          className="absolute top-[0px] left-[897px] w-[233px] h-[271px] overflow-hidden object-cover"
          alt=""
          src="/palmtrees02-1@2x.png"
        />
        <div className="absolute top-[1091px] left-[0px] text-13xl capitalize font-medium text-darkslategray-300">
          Room Amenities
        </div>
        <div className="absolute top-[1309px] left-[0px] text-13xl capitalize font-medium text-darkslategray-300">
          Popular With Guests
        </div>
        <div className="absolute top-[1692px] left-[0px] text-13xl capitalize font-medium text-darkslategray-300">
          Room Features
        </div>
        <FreeWifiCard1 />
        <div className="absolute top-[1179px] left-[0px] w-[656px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] w-[135px] h-[30px]">
            <div className="absolute top-[3px] left-[40px] capitalize">
              Work Desk
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[285px] w-[110px] h-[30px]">
            <div className="absolute top-[3px] left-[40px] capitalize">
              Bathtub
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[545px] w-[111px] h-[30px]">
            <div className="absolute top-[3px] left-[40px] capitalize">
              Balcony
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[1783px] left-[50px] capitalize">
          Telephone
        </div>
        <img
          className="absolute top-[1780px] left-[10px] w-[30px] h-[30px] overflow-hidden object-cover"
          alt=""
          src="/frame@2x.png"
        />
        <div className="absolute top-[1780px] left-[295px] w-[97px] h-[30px]">
          <div className="absolute top-[3px] left-[40px] capitalize">
            Closet
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className="absolute top-[1780px] left-[555px] w-[103px] h-[30px]">
          <div className="absolute top-[3px] left-[40px] capitalize">
            Minbar
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
            alt=""
            src="/frame@2x.png"
          />
        </div>
        <div className="absolute top-[1843px] left-[10px] w-[743px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] w-[94px] h-[30px]">
            <div className="absolute top-[3px] left-[40px] capitalize">
              Mirror
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[285px] w-[157px] h-[30px]">
            <div className="absolute top-[3px] left-[40px] capitalize">
              Clothes Rack
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[545px] w-[198px] h-[30px]">
            <div className="absolute top-[3px] left-[40px] capitalize">
              Blackout Curtains
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden object-cover"
              alt=""
              src="/frame@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[1258.5px] left-[-0.5px] box-border w-[1438px] h-px border-t-[1px] border-solid border-lightgray-200" />
        <div className="absolute top-[1641.5px] left-[-0.5px] box-border w-[1438px] h-px border-t-[1px] border-solid border-lightgray-200" />
      </div>
    </div>
  );
};

export default Rooms;
