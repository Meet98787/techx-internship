import { useCallback } from "react";
import { useRouter } from "next/router";
import Hero from "../components/hero";
import Footer from "../components/footer";
import ContactContainer from "../components/contact-container";

const ContactUs = () => {
  const router = useRouter();

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
    router.push("/");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[2547px] overflow-hidden text-left text-sm text-white font-poppins">
      <div className="absolute top-[8245px] left-[calc(50%_-_169px)]">
        © 2000-2021, The Kings Squre All Rights Reserved
      </div>
      <Hero />
      <img
        className="absolute top-[100px] left-[0px] w-[1920px] h-[730px] object-contain"
        alt=""
        src="/rectangle-19412@2x.png"
      />
      <div className="absolute top-[100px] left-[-1px] bg-gray-400 w-[1920px] h-[730px]" />
      <Footer />
      <div className="absolute top-[2099.5px] left-[247.5px] box-border w-[1459px] h-px border-t-[1px] border-solid border-gray-100" />
      <div className="absolute top-[379px] left-[calc(50%_-_721px)] w-[366px] h-[171px] text-[70px] font-roboto">
        <div className="absolute top-[0px] left-[calc(50%_-_183px)] font-semibold inline-block w-[366px] h-[81px]">
          Contact US
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
      <ContactContainer />
      <img
        className="absolute top-[830px] left-[1092px] w-[233px] h-[271px] overflow-hidden object-cover"
        alt=""
        src="/palmtrees02-2@2x.png"
      />
    </div>
  );
};

export default ContactUs;
