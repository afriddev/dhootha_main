import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import { PRIVACY_POLICY, PRIVACY_POLICY_1, PRIVACY_POLICY_2, PRIVACY_POLICY_3 } from "../utils/appConstants";

function PrivacyPolicy() {
  return (
    <>
    <NavBar/>
    <div className="text-gray-700">
      <div className="bg-bg2 relative m-2 p-4 lg:m-20 lg:p-[8vh]">
        <div className="absolute right-0 top-0 h-8 w-8 border border-gray-400 bg-white">
          <div className="w-8  overflow-hidden ">
            <div className="bg-primaryGreen -mt-8 h-16 origin-bottom-right -rotate-45 transform"></div>
          </div>
        </div>
        <h2 className="text-pH text-xl font-bold lg:text-4xl ">
         {PRIVACY_POLICY}
        </h2>
        <p className="pt-2 text-sm lg:pt-8 lg:text-lg ">
         {PRIVACY_POLICY_1}
        </p>
        <div className="sapce-y-6 mt-8 flex flex-col">
          <h3 className="text-md text-sH font-bold lg:text-2xl">
            {PRIVACY_POLICY_2}
          </h3>
          <p className="pt-2 text-sm lg:pt-8 lg:text-lg">
            {PRIVACY_POLICY_3}
          </p>
          <p className="pt-2 text-sm lg:pt-8 lg:text-lg">
            We also use cookies to gather some data about visitors. A "cookie"
            is a small piece of data about your visit to our site for example,
            how you entered our site, how you navigated through the site, and
            what information was of interest to you. The website sends this
            information to your browser, which may then be stored on your
            system. Currently, we are using cookies only in a select few pages.
            But we do have the plan to use it more extensively in the near
            future so that we can provide you with better results from our site.
            However, you have complete freedom to set your browser to notify you
            when you receive a cookie, giving you the chance to decide whether
            or not to accept it. In the case you do not wish to receive any
            cookies, you can change your browser settings in the Preferences or
            Options menu to completely block the usage of cookies.
          </p>
        </div>
        <div className="sapce-y-6 mt-8 flex flex-col">
          <h3 className="text-md text-sH font-bold lg:text-2xl">
            Information we ask fot
          </h3>
          <p className="pt-2 text-sm lg:pt-8 lg:text-lg ">
            Simple browsing through Fininfolib does not require you to submit
            any personal data. The only point at which we ask for personal data
            is for voluntary registration, Online Quote or subscription for
            white papers, article archives, or our newsletter. The personal data
            collected will not be sold or provided to any outside entities and
            will be used solely by Fin Infolib for a one-on-one contact with
            registrants. Any information that we have collected or stored about
            you may be transferred to a future purchaser of our company and/or
            its assets. The data collected is stored in a secure server located
            at our data centre with our ISP, which will take periodic backups of
            it but will not give or sell them to anyone outside of Fin Infolib.
          </p>
          <p className="pt-2 text-sm lg:pt-8 lg:text-lg ">
            None of this information is reviewed at an individual level. If you
            do not want your transaction details used in this manner, you can
            either disable your cookies or opt out at the download or request
            page.
          </p>
          <p className="pt-2 text-sm lg:pt-8 lg:text-lg">
            We also collect information when you voluntarily submit it to us.
            Throughout our site, we provide the opportunity to register for an
            event or conference, order a white paper, or participate in an
            online survey. When we collect this type of information, we will
            notify you as to why we are asking for information and how this
            information will be used. It is completely up to you whether or not
            you want to provide it.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
export default PrivacyPolicy;
