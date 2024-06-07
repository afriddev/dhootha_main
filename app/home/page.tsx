"use client"
import {
  HOME_MAIN_CONTENT_END,
  HOME_MAIN_CONTENT_START,
  HOME_MAIN_LABEL,
  HOME_MAIN_CONTENT1_BOLD,
  HOME_MAIN_CONTENT_2,
  HAVE_A_CHAT,
  END_TO_END_VIEO_PRODUCTION,
  OUR_SERICES,
  OUR_SERVICES_DESC,
  CORPORATE_VIDEO_PRODUCTION,
  CORPORATE_VIDEO_PRODUCTION_DESC,
  CORPORATE_VIDEO_PRODUCTION1,
  CORPORATE_VIDEO_PRODUCTION1_DESC,
  CORPORATE_VIDEO_PRODUCTION2,
  CORPORATE_VIDEO_PRODUCTION2_DESC,
  WHY_US,
  YEARS_OF_EXPERIENCE,
  YEARS_OF_EXPERIENCE_DESC,
  HAPPY_CLIENT,
  HAPPY_CLIENT_DESC,
  NO_OF_VIEWS,
  NO_OF_VIEWS_DSC,
  OUR_PORTFOLIO,
  OUR_PORTFOLIO_DESC,
  AD1,
  AD1_DESC,
  CORPORATE_FILES,
  AD_FILMS,
  AD2,
  AD2_DESC,
  PRODUCT_PHOTOS_AND_VIDEOS,
  AD3,
  AD3_DESC,
  OUR_TESTIMONIALS,
  OUR_TESTIMONIALS_DESC,
} from "../utils/appConstants";
import { FaWhatsapp } from "react-icons/fa6";
import CarouselView from "../ui/CarouselView";
import { homeMainCarouselViewData } from "../data/homePageData";
import OurServicesCard from "../ui/OurServiceCard";
import OurMakings from "../ui/OurMaking";
import ClientTestimonials from "../ui/Testimonials";
import BottomNav from "../ui/BottomNav";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import WhatsappChat from "../ui/WhatsappChat";
import Spinner from "../ui/Spinner";
import { useEffect, useState } from "react";
import { useAppContext } from "../utils/AppContext";
import { useNavigate } from "react-router-dom";
import Link from "next/link";

function HomeMain() {
  const { dispatch, visitedPages } = useAppContext();
  const [loading, setLoading] = useState(
    visitedPages?.includes("HOME") ? false : true,
  );

  useEffect(() => {
    if (visitedPages.includes("HOME")) null;
    else
      setTimeout(() => {
        setLoading(false);
        dispatch({
          type: "updateVisitedPages",
          payload: "HOME",
        });
      }, 3000);
  }, []);

  return (
    <main className="w-scrren  relative h-screen overflow-x-hidden">
      {/* {loading && <Spinner />} */}
      <div className=" flex flex-col ">
        <NavBar />
        <div className="flex flex-col gap-y-6 pt-4 font-semibold">
          <div className="flex flex-col items-center justify-center gap-y-6 pt-4 lg:h-[83vh] lg:flex-row">
            <div className=" px-4">
              <CarouselView
                dataArray={homeMainCarouselViewData}
                autoPlay={true}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-y-4 px-4">
                <h1 className="text-balance font-mono text-2xl">
                  {HOME_MAIN_LABEL}
                </h1>
                <p className="font-normal ">
                  {HOME_MAIN_CONTENT_START}
                  <span className="font-semibold">
                    {HOME_MAIN_CONTENT1_BOLD}
                  </span>{" "}
                  {HOME_MAIN_CONTENT_END}
                </p>
                <p className="font-normal">{HOME_MAIN_CONTENT_2}</p>
              </div>
              <Link href={"/contact-us"}
                className="mx-4 mt-4 flex h-fit cursor-pointer items-center gap-x-6 rounded-xl border-2 bg-secondary px-5 py-4 text-secondary-foreground hover:scale-105"
              >
                <FaWhatsapp className="h-10 w-10 " />
                <p className="text-pretty">{HAVE_A_CHAT}</p>
              </Link>
            </div>
          </div>
          <div className="w-screen bg-primary  p-6 text-primary-foreground lg:p-20">
            <p className=" text-center  text-3xl font-semibold ">
              {END_TO_END_VIEO_PRODUCTION}
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-y-3 px-4 ">
            <h2 className="w-fit border-b-2 text-4xl font-semibold  ">
              {OUR_SERICES}
            </h2>
            <p className="px-4 text-center font-normal ">{OUR_SERVICES_DESC}</p>
          </div>
          <div className="mt-12 flex flex-col gap-y-6  px-4 lg:flex-row lg:gap-x-5">
            <OurServicesCard
              title={CORPORATE_VIDEO_PRODUCTION}
              desc={CORPORATE_VIDEO_PRODUCTION_DESC}
              image="services/videoProduction.jpeg"
              className="bg-cyan-100"
            />
            <OurServicesCard
              title={CORPORATE_VIDEO_PRODUCTION1}
              desc={CORPORATE_VIDEO_PRODUCTION1_DESC}
              image="services/lifestyle.png"
              className="bg-yellow-100"
            />
            <OurServicesCard
              title={CORPORATE_VIDEO_PRODUCTION2}
              desc={CORPORATE_VIDEO_PRODUCTION2_DESC}
              image="services/coverage.jpg"
              className="bg-primary/10"
            />
          </div>
          <div className="mt-6 flex flex-col items-center gap-y-6 bg-secondary-foreground p-4 text-primary-foreground lg:flex-row lg:gap-10  lg:p-10">
            <img src="whyus/whyUs.jpg" className="rounded-lg" />
            <div className="flex flex-col items-center gap-y-6 bg-secondary-foreground ">
              <h3 className="border-b-2 border-primary-foreground pb-1 text-center text-3xl font-bold ">
                {WHY_US}
              </h3>
              <div className="flex flex-col items-start gap-1">
                <h4 className="text-start text-xl">{YEARS_OF_EXPERIENCE}</h4>
                <p className="pl-3 text-sm font-normal">
                  {YEARS_OF_EXPERIENCE_DESC}
                </p>
              </div>

              <div className="flex flex-col items-start gap-1">
                <h4 className="text-start text-xl">{HAPPY_CLIENT}</h4>
                <p className="pl-3 text-sm font-normal">{HAPPY_CLIENT_DESC}</p>
              </div>
              <div className="flex flex-col items-start gap-1">
                <h4 className="text-start text-xl">{NO_OF_VIEWS}</h4>
                <p className="pl-3 text-sm font-normal">{NO_OF_VIEWS_DSC}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-8  px-4">
            <div className="flex flex-col items-center gap-y-4">
              <h4 className="w-fit border-b-2 border-secondary-foreground pb-1  text-3xl font-bold">
                {OUR_PORTFOLIO}
              </h4>
              <p className="text-center font-normal">{OUR_PORTFOLIO_DESC}</p>
            </div>
            <div className="flex flex-col gap-y-10">
              <OurMakings
                legendLabel={CORPORATE_FILES}
                legendStyle="bg-purple-200 font-semibold "
                showCaseProducts={[
                  {
                    heading: AD1,
                    headingDesc: AD1_DESC,
                    hasVideo: true,
                    videos: (
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/QUXtxjJPRbM?si=121aaENR33ZNyjYX"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        className=" items-stretch rounded-md object-fill hover:scale-105 lg:h-[40vh] lg:w-[40vw] "
                      ></iframe>
                    ),
                  },
                ]}
              />

              <OurMakings
                legendLabel={AD_FILMS}
                legendStyle="bg-yellow-200 font-semibold "
                showCaseProducts={[
                  {
                    heading: AD2,
                    headingDesc: AD2_DESC,
                    hasVideo: true,
                    videos: (
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ngs15DNXhAA?si=k2ezwHay52j6fvXf"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className=" items-stretch rounded-md object-fill hover:scale-105 lg:h-[40vh] lg:w-[40vw] "
              
                      ></iframe>
                    ),
                  },
                ]}
              />
              <OurMakings
                legendLabel={PRODUCT_PHOTOS_AND_VIDEOS}
                legendStyle="bg-blue-200 font-semibold text-nowrap  "
                showCaseProducts={[
                  {
                    heading: AD3,
                    headingDesc: AD3_DESC,
                    hasVideo:true,
                    videos:<iframe width="560" height="315" src="https://www.youtube.com/embed/KbZILxtPiI4?si=ESAmh77RHfXjGH1a" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className=" items-stretch rounded-md object-fill hover:scale-105 lg:h-[40vh] lg:w-[40vw] "></iframe>
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex  flex-col gap-y-8 lg:mt-6">
            <div className="flex flex-col items-center gap-y-4 px-4">
              <h4 className="w-fit border-b-2 border-secondary-foreground pb-1  text-3xl font-bold">
                {OUR_TESTIMONIALS}
              </h4>
              <p className="text-center font-normal">{OUR_TESTIMONIALS_DESC}</p>
            </div>
            <div className="bg-black p-3">
              <ClientTestimonials />
            </div>
          </div>
          <div className="-mt-6">
            <BottomNav />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
      <WhatsappChat />
    </main>
  );
}
export default HomeMain;
