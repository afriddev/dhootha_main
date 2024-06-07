"use client";
import Link from "next/link";
import {
  ABOUT_US,
  BLOG,
  CONTACT,
  COPYRIGHT_SYMBOL,
  DOOTHA_PROMOTIONS,
  HOME,
  PORTFOLIO,
  PRIVACY_POLICY,
  SEND_MESSAGE,
} from "../utils/appConstants";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


interface MobileNavBarInterface{
  setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
function MobileNavBar({setOpen}:MobileNavBarInterface) {
  return (
    <div className="flex fixed  w-screen h-screen z-[999]">
      <div className="fixed flex flex-col w-[70vw] h-screen left-0 bg-slate-900 z-[999] items-center text-primary-foreground shadow-2xl drop-shadow-2xl py-8 px-8 justify-between">
      <div>
        <label className="flex text-center text-[5vh] px-3">{DOOTHA_PROMOTIONS}</label>
      </div>
      <li className="flex flex-col w-full py-8 gap-10 items-center h-fit justify-between px-6">
        <Link
          className="border rounded-md  w-full flex items-center justify-center py-1 bg-secondary text-black shadow-xl "
          href={"/home"}  onClick={()=>{
            setOpen(false)}}
        >
          {HOME}
        </Link>
        <Link
          className="border rounded-md border-zinc-200 w-full flex items-center justify-center py-1 "
          href={"/portfolio"}  onClick={()=>{
            setOpen(false)}}
        >
          {PORTFOLIO}
        </Link>
        <Link
          className="border rounded-md border-zinc-200 w-full flex items-center justify-center py-1 "
          href={"/about"}  onClick={()=>{
            setOpen(false)}}
        >
          {ABOUT_US}
        </Link>
        <Link
          className="border rounded-md border-zinc-200 w-full flex items-center justify-center py-1 "
          href={"/contact-us"}  onClick={()=>{
            setOpen(false)}}
        >
          {CONTACT}
        </Link>
        <a
          className="border rounded-md bg-primary w-full flex items-center justify-center py-1 drop-shadow-2xl shadow-2xl"  onClick={()=>{
            setOpen(false)}}
        > 
          {SEND_MESSAGE}
        </a>
        <Link
          className="border rounded-md border-zinc-200 w-full flex items-center justify-center py-1 "
          href={"/privacy-policy"}  onClick={()=>{
            setOpen(false)}}
        >
          {PRIVACY_POLICY}
        </Link>
      </li>
      <div className="mt-4 h-[1px]  w-[60vw] bg-white/60 lg:hidden"></div>

      <div className="mt-8 px-3">
        <li className="flex w-full justify-between gap-x-6 text-white">
          <a  onClick={()=>{
      setOpen(false)}} className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150">
            <FaInstagram className="h-7 w-7 text-white " />
          </a>

          <a  onClick={()=>{
      setOpen(false)}} className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150">
            <BiLogoGmail className="h-7 w-7 text-white " />
          </a>
          <a  onClick={()=>{
      setOpen(false)}} className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150">
            <FaFacebook className="h-7 w-7 text-white " />
          </a>
          <a  onClick={()=>{
      setOpen(false)}} className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150">
            <FaTwitter className="h-7 w-7 text-white " />
          </a>
        </li>
      </div>
      <label className="text-[15px] mt-6 lg:text-lg font-normal">{`${COPYRIGHT_SYMBOL}  ${DOOTHA_PROMOTIONS}`}</label>
    </div>
    <div className="h-screen w-[30vw] opacity-0 bg-transparent fixed right-0 " onClick={()=>{
      setOpen(false)}} ></div>
    </div>
  );
}

export default MobileNavBar;
