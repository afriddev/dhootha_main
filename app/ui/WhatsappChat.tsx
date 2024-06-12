import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  CHAT,
  CLOSE,
  DHOOTHA_PROMOTIONS_CHAT,
  SUPPORT_MESSAGE,
} from "../utils/appConstants";
import { CgClose } from "react-icons/cg";
import { TbSend2 } from "react-icons/tb";

function WhatsappChat() {
  const [click, setClick] = useState(true);
  function openLinks(v:string){

    const link = v === "w"?'//api.whatsapp.com/send?phone=919553360657&text=Hello👋':v === "i"?"https://www.instagram.com/dootha_promotions":v === "m"?"mailto:doothapromotions@gmail.com":v=="f"?"":""

    window.open(link)
  }
  return (
    <div className="lg:right- fixed bottom-2 right-2 z-[997]  lg:bottom-3">
      {click ? (
        <FaWhatsapp onClick={()=>{setClick(false)}} className="h-12 w-12 cursor-pointer rounded-full bg-constructive p-2 text-primary-foreground " />
      ) : (
        <div className=" absolute bottom-0 right-5 lg:bottom-4 lg:right-5 bg-blue-50 h-fit lg:h-[30vh] w-[70vw]  lg:w-[25vw] lg:rounded-xl pb-3  rounded-xl">
          <div className=" flex items-center  justify-between rounded-t-xl bg-green-500 px-4 py-2 text-white">
            <label>{DHOOTHA_PROMOTIONS_CHAT}</label>
            <div
            onClick={()=>{setClick(true)}}
              title={CLOSE}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/30  hover:bg-black/50 p-2  "
            >
              <CgClose className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="relative  left-4 top-4 h-16  w-[50vw] lg:w-[15vw] rounded-xl bg-white px-4 py-1 shadow-2xl">
            <label className="text-xs ">{SUPPORT_MESSAGE}</label>
          </div>
          <div className="w-full flex justify-end pr-4 mt-8">
            <div onClick={()=>{openLinks('w')}} className=" px-2 lg:w-24 h-10 rounded-lg bg-constructive text-white flex items-center cursor-pointer justify-center gap-2 lg:hover:scale-105">{CHAT}
            <TbSend2 className="h-5 w-5   text-white"/></div>
          </div>
        </div>
      )}
    </div>
  );
}
export default WhatsappChat;
