"use client"
import {
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
} from "../utils/appConstants";

import OurMakings from "../ui/OurMaking";
import Contact from "../ui/Contact";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import WhatsappChat from "../ui/WhatsappChat";

function Portfolio() {
  return (
    <main className="w-scrren  relative h-screen overflow-x-hidden">
      <div className=" flex flex-col ">
        <NavBar />
        <div className="flex flex-col gap-y-6 pt-4 font-semibold">
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
          <div className="mt-6">
            <Contact />
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
export default Portfolio;
