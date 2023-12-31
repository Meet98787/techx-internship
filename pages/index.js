import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import HomeAbout from "../components/home-about";
import HomeHero from "../components/home-hero";
import HomeReview from "../components/home-review";
import Footer from "../components/footer";
import HomeMenus from "../components/home-menus";
import HomeServices from "../components/home-services";
import HomeEvent from "../components/home-event";
import QuickLinksSection from "../components/quick";

const Home = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

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

  const onFrameContainer21Click = useCallback(() => {
    // Please sync "Rooms" to the project
  }, []);

  const onGroupContainer55Click = useCallback(() => {
    // Please sync "Services" to the project
  }, []);

  const onFrameContainer24Click = useCallback(() => {
    // Please sync "Events" to the project
  }, []);

  const onFrameContainer26Click = useCallback(() => {
    // Please sync "About US" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[7326px] overflow-hidden text-center text-lg text-white font-roboto">
      <section className="absolute top-[-2px] left-[-1px] w-[1922px] h-[930px]">
        <img
          className="absolute top-[0px] left-[1px] w-[1921px] h-[930px] object-contain"
          alt=""
          src="/vector-3@2x.png"
        />
        <img
          className="absolute top-[2px] left-[0px] w-[1921px] h-[926px] object-cover"
          alt=""
          src="/vector-4@2x.png"
        />
      </section>
      <div className="absolute top-[274px] left-[calc(50%_-_423px)] text-[80px] font-semibold inline-block w-[845px]">
        Perfect Place For Your Lovely Vacation
      </div>
      <div className="absolute top-[482px] left-[calc(50%_-_303px)] text-[26px] font-medium">{`Discover the place where you have fun& enjoy alot`}</div>
      <Header
        image2="/image-2@2x.png"
        frameDivPosition="absolute"
        frameDivTop="6px"
        frameDivLeft="239px"
        onFrameContainerClick={onFrameContainerClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onFrameContainer2Click={onFrameContainer2Click}
        onFrameContainer3Click={onFrameContainer3Click}
        onServicesTextClick={onServicesTextClick}
        onFrameContainer5Click={onFrameContainer5Click}
      />
      <HomeAbout />
      <HomeHero />
      <img
        className="absolute top-[5768px] left-[0px] w-[1918px] h-[730px] object-cover"
        alt=""
        src="/rectangle-19399@2x.png"
      />
      <div className="absolute top-[5768px] left-[3px] [background:linear-gradient(269.98deg,_#dba156_14.43%,_rgba(217,_217,_217,_0))] w-[1918px] h-[730px]" />
      <div className="absolute top-[6321px] left-[1028px] w-[129px] h-[42px] text-[25.88px] text-sandybrown font-work-sans">
        <div className="absolute top-[0px] left-[0px] w-[129px] h-[42px]">
          <div className="absolute top-[0px] left-[69px] w-[60px] h-[42px]">
            <div className="absolute top-[0px] left-[0px] rounded-33xl bg-whitesmoke w-[60px] h-[42px]" />
            <div className="absolute top-[6px] left-[20px] capitalize">→</div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[60px] h-[42px] text-whitesmoke">
            <div className="absolute top-[36px] left-[40px] capitalize [transform:_rotate(180deg)] [transform-origin:0_0]">
              →
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-33xl box-border w-[60px] h-[42px] border-[1px] border-solid border-whitesmoke" />
          </div>
        </div>
      </div>
      <div className="absolute top-[5879px] left-[549px] w-[1133px] h-[500px] text-left text-xl">
        <div className="absolute top-[25px] left-[479px] w-[654px] h-[387px]">
          <HomeReview />
          <div className="absolute top-[303px] left-[0px] leading-[28px] whitespace-pre-wrap inline-block w-[654px]">
            Many rooms have balconies that beckon you to breathe in the pure
            Mediterranean air of the island. and feature an elegant with shower
            will be can not to come did not beckon you can not.
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[400.23px] h-[500px]">
          <img
            className="absolute top-[16px] left-[341px] w-[59.23px] h-[59.4px] object-contain"
            alt=""
            src="/vector@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] w-[376px] h-[500px]">
            <div className="absolute top-[0px] left-[0px] rounded-[295px] box-border w-[376px] h-[500px] border-[2px] border-solid border-white" />
            <img
              className="absolute top-[12px] left-[12px] rounded-[290px] w-[352px] h-[476px] object-cover"
              alt=""
              src="/rectangle-19403@2x.png"
            />
            <img
              className="absolute top-[75px] left-[325px] w-[31.44px] h-[31.53px] object-contain"
              alt=""
              src="/vector@2x.png"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute h-[2.41%] w-[16.15%] top-[87.47%] right-[0%] bottom-[10.12%] left-[83.85%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/group@2x.png"
      />
      <img
        className="absolute h-[3.64%] w-[13.68%] top-[78.9%] right-[0.38%] bottom-[17.46%] left-[85.94%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/group-1000004123@2x.png"
      />
      <img
        className="absolute h-[3.64%] w-[13.68%] top-[23.72%] right-[12.83%] bottom-[72.64%] left-[73.49%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/group-1000004123@2x.png"
      />
      <img
        className="absolute h-[3.2%] w-[17.65%] top-[24.56%] right-[83.55%] bottom-[72.25%] left-[-1.2%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/group@2x.png"
      />

      <QuickLinksSection/>
      <img
        className="absolute top-[987px] left-[1415px] w-[255px] h-[297px] overflow-hidden object-cover"
        alt=""
        src="/palmtrees02-1@2x.png"
      />
      <HomeMenus />
      <div className="absolute top-[1883px] left-[calc(50%_-_720px)] w-[1440px] h-[840px] text-31xl text-darkslategray-100">
        <div className="absolute top-[0px] left-[calc(50%_-_532px)] w-[1064px] h-[166px]">
          <div className="absolute top-[36px] left-[calc(50%_-_532px)] font-semibold inline-block w-[1064px]">
            <span>{`Sweeping View Of The Adriatic In `}</span>
            <span className="text-sandybrown">Your</span>
            <span>{` `}</span>
            <span className="text-sandybrown">Room</span>
            <span>{` `}</span>
          </div>
          <div className="absolute top-[0px] left-[331px] w-[403px] h-[26px] text-3xl text-sandybrown">
            <div className="absolute top-[0px] left-[122px] tracking-[0.03em] font-semibold">
              LUXURY ROOM
            </div>
            <img
              className="absolute top-[13px] left-[287px] max-h-full w-[116px] object-cover"
              alt=""
              src="/line-1@2x.png"
            />
            <img
              className="absolute top-[13px] left-[0px] max-h-full w-[116px] object-contain"
              alt=""
              src="/line-3@2x.png"
            />
          </div>
          <div className="absolute top-[110px] left-[calc(50%_-_399px)] text-xl leading-[28px] text-darkgray-100 whitespace-pre-wrap inline-block w-[798px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been standard the typesetting, remaining
            essentially unchanged.
          </div>
        </div>
        <div className="absolute top-[196px] left-[0px] w-[1440px] h-[644px] text-left text-xl text-darkgray-100">
          <div className="absolute top-[0px] left-[0px] w-[1440px] h-[644px]">
            <div className="absolute top-[32px] left-[0px] leading-[28px] inline-block w-[596px]">
              Many rooms have balconies that beckon you to breathe in the pure
              Mediterranean air of the island. All rooms are air conditioned and
              feature an elegant ensuite bathroom with shower will be can not to
              come did not beckon you can not.
            </div>
            <img
              className="absolute top-[0px] left-[696px] rounded-3xs w-[744px] h-[552px] object-cover"
              alt=""
              src="/rectangle-10@2x.png"
            />
            <img
              className="absolute top-[285px] left-[0px] rounded-3xs w-[671px] h-[359px] object-cover"
              alt=""
              src="/rectangle-11@2x.png"
            />
          </div>
          <div
            className="absolute top-[174px] left-[0px] rounded-3xs bg-sandybrown flex flex-row items-center justify-center py-[15px] px-9 cursor-pointer text-lg text-white"
            onClick={onFrameContainer21Click}
          >
            <div className="relative font-semibold">Explore Rooms</div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[4559px] left-[204px] w-[138.18px] h-[114px] object-cover"
        alt=""
        src="/group-1000004124@2x.png"
      />
      <img
        className="absolute top-[4560px] left-[1451px] w-[371px] h-[200px] overflow-hidden object-cover"
        alt=""
        src="/birds014-1@2x.png"
      />
      <div
        className="absolute top-[4677px] left-[240px] w-[1440px] h-[971px] cursor-pointer"
        onClick={onGroupContainer55Click}
      >
        <HomeServices />
      </div>
      <img
        className="absolute top-[3673px] left-[1411px] w-[120px] h-[99px] object-cover"
        alt=""
        src="/group-1000004122@2x.png"
      />
      <div className="absolute top-[3673px] left-[240px] w-[1440px] h-[796px] text-3xl text-sandybrown">
        <div className="absolute top-[196px] left-[0px] w-[1440px] h-[600px]">
          <HomeEvent
            cardTitle="/rectangle-19379@2x.png"
            categoryLabel="For Companies"
            propLeft="730px"
            propWidth="710px"
            propWidth1="710px"
            propWidth2="710px"
            propWidth3="710px"
          />
          <HomeEvent
            cardTitle="/rectangle-19378@2x.png"
            categoryLabel="Family Celebrations"
            propLeft="0px"
            propWidth="705px"
            propWidth1="705px"
            propWidth2="705px"
            propWidth3="705px"
          />
        </div>
        <div className="absolute top-[0px] left-[339px] w-[762px] h-[166px]">
          <div className="absolute top-[0px] left-[216px] w-[318px] h-[26px]">
            <div className="absolute top-[0px] left-[117px] tracking-[0.03em] font-semibold">
              EVENTS
            </div>
            <img
              className="absolute top-[13px] left-[202px] max-h-full w-[116px] object-cover"
              alt=""
              src="/line-1@2x.png"
            />
            <img
              className="absolute top-[13px] left-[0px] max-h-full w-[116px] object-contain"
              alt=""
              src="/line-3@2x.png"
            />
          </div>
          <div className="absolute top-[110px] left-[calc(50%_-_381px)] text-xl leading-[28px] text-darkgray-100 inline-block w-[762px]">
            All rooms are air conditioned and feature an elegant ensuite
            bathroom with shower will be can not to come did not beckon you can
            not.
          </div>
          <div className="absolute top-[36px] left-[calc(50%_-_257px)] text-31xl font-semibold text-darkslategray-100">
            <span>{`Experience Our `}</span>
            <span className="text-sandybrown">Events</span>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[4504px] left-[calc(50%_-_79px)] rounded-3xs bg-sandybrown flex flex-row items-center justify-center py-[15px] px-9 cursor-pointer"
        onClick={onFrameContainer24Click}
      >
        <div className="relative font-semibold">View More</div>
      </div>
      <div className="absolute top-[5399px] left-[282px] rounded-3xs bg-sandybrown flex flex-row items-center justify-center py-[15px] px-9 text-left">
        <div className="relative font-semibold">{`Explore `}</div>
      </div>
      <div
        className="absolute top-[1660px] left-[calc(50%_+_112px)] rounded-3xs bg-sandybrown flex flex-row items-center justify-center py-[15px] px-9 cursor-pointer"
        onClick={onFrameContainer26Click}
      >
        <div className="relative font-semibold">View More</div>
      </div>
    </div>
  );
};

export default Home;
