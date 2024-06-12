"use client"
import {
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

  import OurServicesCard from "../ui/OurServiceCard";
  import OurMakings from "../ui/OurMaking";
  import ClientTestimonials from "../ui/Testimonials";
  import Contact from "../ui/Contact";
  import Footer from "../ui/Footer";
  import NavBar from "../ui/NavBar";
  import WhatsappChat from "../ui/WhatsappChat";
import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";
import { useAppContext } from "../utils/AppContext";
  
  function AboutUs() {
    const {dispatch,visitedPages} = useAppContext()
    const [loading,setLoading] = useState(visitedPages?.includes("ABOUTUS")?false:true)
  
    useEffect(()=>{
     if(visitedPages.includes("ABOUTUS")) null
     else setTimeout(()=>{
      setLoading(false)
      dispatch({
        type:"updateVisitedPages",
        payload:"ABOUTUS"
      })
    },2000)
    },[])
    
    return (
      <main className="w-scrren  relative h-screen overflow-x-hidden">
        {loading && <Spinner/>}
        <div className=" flex flex-col ">
          <NavBar/>
          <div className="flex flex-col gap-y-6 pt-4 font-semibold">
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
                      images: ["homeMain3.jpg"],
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
                      images: ["homeMain4.jpg"],
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
                      images: ["homeMain1.jpg"],
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
              <Contact />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
        <WhatsappChat/>
      </main>
    );
  }
  export default AboutUs;
  