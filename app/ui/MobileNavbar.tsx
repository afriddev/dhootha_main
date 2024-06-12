"use client";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  ABOUT_US,
  CONTACT,
  COPYRIGHT_SYMBOL,
  DOOTHA_PROMOTIONS,
  HOME,
  PORTFOLIO,
  PRIVACY_POLICY,
} from "../utils/appConstants";

interface MobileNavBarInterface {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function MobileNavBar({ setOpen }: MobileNavBarInterface) {
  function openLinks(v: string) {
    const link =
      v === "w"
        ? "//api.whatsapp.com/send?phone=919553360657&text=Hello👋"
        : v === "i"
          ? "https://www.instagram.com/dootha_promotions"
          : v === "m"
            ? "mailto:doothapromotions@gmail.com"
            : v == "f"
              ? ""
              : "";

    window.open(link);
  }
  return (
    <div className="flex fixed  w-screen h-[100vh] z-[999]">
      <div className="fixed flex flex-col w-[70vw] h-[100vh] left-0 bg-slate-900 z-[999] items-center text-primary-foreground shadow-2xl drop-shadow-2xl  justify-between">
        <div className="flex flex-col h-[80vh] items-center w-full  justify-between">
          <div className="bg-secondary w-full h-fit items-center flex justify-center">
            <img
              src="logoMain.png"
              className=" w-[60vw] h-[6vh] lg:w-[20vw] lg:h-[9vh] my-3 items-center flex justify-center"
            />
          </div>
          <li className="flex flex-col w-full py-8 gap-10 items-center h-fit justify-between px-6">
            <Link
              className="border rounded-md  w-full flex items-center justify-center py-1 bg-secondary text-black shadow-xl "
              href={"/home"}
              onClick={() => {
                setOpen(false);
              }}
            >
              {HOME}
            </Link>
            <Link
              className="border rounded-md border-zinc-200 w-full flex items-center justify-center py-1 "
              href={"/portfolio"}
              onClick={() => {
                setOpen(false);
              }}
            >
              {PORTFOLIO}
            </Link>
            <Link
              className="border rounded-md border-zinc-200 w-full flex items-center justify-center py-1 "
              href={"/about"}
              onClick={() => {
                setOpen(false);
              }}
            >
              {ABOUT_US}
            </Link>
            <Link
              className="border rounded-md border-zinc-200 w-full flex items-center justify-center py-1 "
              href={"/contact-us"}
              onClick={() => {
                setOpen(false);
              }}
            >
              {CONTACT}
            </Link>
            <Link
              className="border rounded-md border-zinc-200 w-full flex items-center justify-center py-1 "
              href={"/privacy-policy"}
              onClick={() => {
                setOpen(false);
              }}
            >
              {PRIVACY_POLICY}
            </Link>
          </li>
          <div className="mt-4 h-[1px]  w-[60vw] bg-white/60 lg:hidden"></div>

          <div className="mt-8 px-3">
            <li className="flex w-full justify-between gap-x-6 text-white">
              <a
                onClick={() => {
                  setOpen(false);
                  openLinks("i");
                }}
                className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150"
              >
                <FaInstagram className="h-7 w-7 text-white " />
              </a>

              <a
                onClick={() => {
                  setOpen(false);
                  openLinks("m");
                }}
                className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150"
              >
                <BiLogoGmail className="h-7 w-7 text-white " />
              </a>
              <a
                onClick={() => {
                  setOpen(false);
                  openLinks("f");
                }}
                className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150"
              >
                <FaFacebook className="h-7 w-7 text-white " />
              </a>
              <a
                onClick={() => {
                  setOpen(false);
                  openLinks("t");
                }}
                className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150"
              >
                <FaTwitter className="h-7 w-7 text-white " />
              </a>
            </li>
          </div>

          <label className="text-[15px] mt-6 lg:text-lg font-normal">{`${COPYRIGHT_SYMBOL}  ${DOOTHA_PROMOTIONS}`}</label>
        </div>
      </div>
      <div
        className="h-[100vh] w-[30vw] opacity-0 bg-transparent fixed right-0 "
        onClick={() => {
          setOpen(false);
        }}
      ></div>
    </div>
  );
}

export default MobileNavBar;
