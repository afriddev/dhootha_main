"use client";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  ABOUT_US,
  BLOG,
  CONTACT,
  DOOTHA_PROMOTIONS,
  HOME,
  PORTFOLIO,
} from "../utils/appConstants";
import { Button } from "../../@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "hamburger-react";
import MobileNavBar from "./MobileNavbar";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className=" flex h-fit  items-center bg-secondary  ">
        <div className=" w-full h-fit items-center justify-between flex pl-4 pr-5 py-2 lg:py-4">
          <Link href={"/"}>
            <img
              src="logoMain.png"
              className=" w-[50vw] h-[6vh] lg:w-[20vw] lg:h-[9vh]"
            />
          </Link>
          <a className="block lg:hidden">
            <Hamburger toggled={open} size={30} toggle={setOpen} />
          </a>
        </div>

        <div className=" hidden lg:block lg:pr-6">
          <li className="flex list-none items-center gap-x-10">
            <Link href={"/portfolio"}>
              <Button variant={"outline"}>{PORTFOLIO}</Button>
            </Link>
            <Link href={"/about"}>
              <Button variant={"outline"}>{ABOUT_US}</Button>
            </Link>
            <Link href={"/contact-us"}>
              <Button variant={"outline"}>{CONTACT}</Button>
            </Link>
            <Link href={"/home"}>
              <Button className="hidden lg:block">{HOME}</Button>
            </Link>
          </li>
        </div>
      </div>
      {open && <MobileNavBar setOpen={setOpen} />}
    </>
  );
}
export default NavBar;
