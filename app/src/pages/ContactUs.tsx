import { useEffect, useState } from "react";
import BottomNav from "../ui/BottomNav";
import Footer from "../ui/Footer";
import NavBar from "../ui/NavBar";
import WhatsappChat from "../ui/WhatsappChat";
import Spinner from "../ui/Spinner";
import { useAppContext } from "../utils/AppContext";

function ContactUs() {
    const {dispatch,visitedPages} = useAppContext()
    const [loading,setLoading] = useState(visitedPages?.includes("CONTACTUS")?false:true)
  
    useEffect(()=>{
     if(visitedPages.includes("CONTACTUS")) null
     else setTimeout(()=>{
      setLoading(false)
      dispatch({
        type:"updateVisitedPages",
        payload:"CONTACTUS"
      })
    },2000)
    },[])
    
  return (
    <main className="w-scrren  relative h-screen overflow-x-hidden">
        {loading && <Spinner/>}
      <div className=" flex flex-col ">
        <NavBar />
        <div className="flex flex-col gap-y-6 pt-4 font-semibold">
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
export default ContactUs;
