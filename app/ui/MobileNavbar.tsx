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
import { useAppContext } from "../utils/AppContext";

interface MobileNavBarInterface {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function MobileNavBar({ setOpen }: MobileNavBarInterface) {
  const { visitedPages, dispatch, currentPage } = useAppContext();

  function updateCurrentPage(page: string) {
    dispatch({
      type: "setCurrentPage",
      payload: page,
    });
  }

  function handleClick(page?: string | boolean, link?: string) {
    setOpen(false);
    if (page) {
      updateCurrentPage(page as string);
    }
    if (link) {
      openLinks(link);
    }
  }

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

  function getButtonBgColor(page: string) {
    if (page === currentPage) return " bg-secondary text-black ";
  }

  return (
    <div className="flex fixed  w-screen h-[100vh] z-[999]">
      <div className="fixed flex flex-col w-[70vw] h-[100vh] left-0 bg-slate-900 z-[999] items-center text-primary-foreground shadow-2xl drop-shadow-2xl  justify-between">
        <div className="flex flex-col h-[80vh] items-center w-full  justify-between">
          <div className="bg-secondary w-full h-fit items-center flex justify-center">
            <img
              src="logoMain.png"
              className=" w-[50vw] h-[5.7vh] lg:w-[20vw] lg:h-[9vh] my-3 items-center flex justify-center"
            />
          </div>
          <li className="flex flex-col w-full py-8 gap-10 items-center h-fit justify-between px-6">
            <Link
              className={`border rounded-md border-zinc-200 w-full flex items-center justify-center py-1 ${getButtonBgColor("home")}`}
              href={"/home"}
              onClick={() => {
                handleClick("home");
              }}
            >
              {HOME}
            </Link>
            <Link
              className={`border rounded-md border-zinc-200 w-full flex items-center justify-center py-1 ${getButtonBgColor("portfolio")} `}
              href={"/portfolio"}
              onClick={() => {
                handleClick("portfolio");
              }}
            >
              {PORTFOLIO}
            </Link>
            <Link
              className={`border rounded-md border-zinc-200 w-full flex items-center justify-center py-1  ${getButtonBgColor("about")}`}
              href={"/about"}
              onClick={() => {
                handleClick("about");
              }}
            >
              {ABOUT_US}
            </Link>
            <Link
              className={`border rounded-md border-zinc-200 w-full flex items-center justify-center py-1  ${getButtonBgColor("contact-us")}`}
              href={"/contact-us"}
              onClick={() => {
                handleClick("contact-us");
              }}
            >
              {CONTACT}
            </Link>
            <Link
              className={`border rounded-md border-zinc-200 w-full flex items-center justify-center py-1  ${getButtonBgColor("privacy-policy")}`}
              href={"/privacy-policy"}
              onClick={() => {
                handleClick("privacy-policy");
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
                  handleClick(false, "i");
                }}
                className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150"
              >
                <FaInstagram className="h-7 w-7 text-white " />
              </a>

              <a
                onClick={() => {
                  handleClick(false, "m");
                }}
                className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150"
              >
                <BiLogoGmail className="h-7 w-7 text-white " />
              </a>
              <a
                onClick={() => {
                  handleClick(false, "f");
                }}
                className=" flex h-8 w-8 items-center justify-center rounded-md bg-white/10 p-2 hover:scale-125 lg:hover:scale-150"
              >
                <FaFacebook className="h-7 w-7 text-white " />
              </a>
              <a
                onClick={() => {
                  handleClick(false, "t");
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
