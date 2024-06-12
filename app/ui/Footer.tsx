import {
  COPYRIGHT_SYMBOL,
  DOOTHA_PROMOTIONS,
  PRIVACY_POLICY,
  TERMS_OF_SERVICES,
  VIDEO_PRODUCTON_ON_DEMAND,
} from "../utils/appConstants";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";


function Footer() {
  function openLinks(v:string){

    const link = v === "w"?'//api.whatsapp.com/send?phone=919553360657&text=Hello👋':v === "i"?"https://www.instagram.com/dootha_promotions":v === "m"?"mailto:doothapromotions@gmail.com":v=="f"?"":""

    window.open(link)
  }
  return (
    <div className="bg-black p-5 text-white">
      <div className="flex flex-col gap-3 lg:items-center">
        <div className="flex w-full  flex-col items-center text-center">
          <label className="text-lg font-normal lg:text-3xl ">
            {DOOTHA_PROMOTIONS}
          </label>
          <p className="text-[10px] font-normal lg:text-[12px]">
            {VIDEO_PRODUCTON_ON_DEMAND}
          </p>
        </div>
        <div className="mt-2 h-[1px] w-full bg-white/60 lg:hidden"></div>
        <div className="mt-4 w-full list-none px-5 lg:w-[20vw]">
          <li className="flex w-full justify-between gap-x-6 text-white">
            <a onClick={()=>{openLinks("i")}} className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150">
              <FaInstagram className="h-7 w-7 text-white " />
            </a>

            <a onClick={()=>{openLinks("m")}} className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150">
              <BiLogoGmail className="h-7 w-7 text-white " />
            </a>
            <a onClick={()=>{openLinks("f")}} className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150">
              <FaFacebook className="h-7 w-7 text-white " />
            </a>
            <a onClick={()=>{openLinks("t")}} className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150">
              <FaTwitter className="h-7 w-7 text-white " />
            </a>
          </li>
        </div>
      </div>
      <div className="mt-4 h-[1px] w-full bg-white/60 lg:hidden"></div>

      <div className="mt-2 flex w-full items-center justify-between lg:px-20 lg:mt-10">
        <label className="text-[10px] lg:text-lg font-normal">{`${COPYRIGHT_SYMBOL}  ${DOOTHA_PROMOTIONS}`}</label>
        <Link href={"/privacy-policy"} className="text-[10px] lg:text-lg font-normal cursor-pointer  border-b border-white lg:hover:scale-105 ">{PRIVACY_POLICY}</Link>

        <a className="text-[10px] lg:text-lg font-normal cursor-pointer  border-b border-white lg:hover:scale-105 ">{TERMS_OF_SERVICES}</a>
      </div>
    </div>
  );
}
export default Footer;
