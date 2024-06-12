"use client";
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
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import MobileNavBar from "./MobileNavbar";
import { useAppContext } from "../utils/AppContext";

function NavBar() {
  const [open, setOpen] = useState(false);
  const { visitedPages, dispatch, currentPage } = useAppContext();
  function updateCurrentPage(page: string) {
    dispatch({
      type: "setCurrentPage",
      payload: page,
    });
  }

  return (
    <>
      <div className=" flex h-fit  items-center bg-secondary  ">
        <div className=" w-full h-fit items-center justify-between flex pl-4 pr-5 py-2 lg:py-4">
          <Link
            href={"/"}
            onClick={() => {
              updateCurrentPage("home");
            }}
          >
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
            <Link
              href={"/portfolio"}
              onClick={() => {
                updateCurrentPage("portfolio");
              }}
            >
              <Button
                variant={currentPage !== "portfolio" ? "outline" : "default"}
              >
                {PORTFOLIO}
              </Button>
            </Link>
            <Link
              href={"/about"}
              onClick={() => {
                updateCurrentPage("about");
              }}
            >
              <Button variant={currentPage !== "about" ? "outline" : "default"}>
                {ABOUT_US}
              </Button>
            </Link>
            <Link
              href={"/contact-us"}
              onClick={() => {
                updateCurrentPage("contact-us");
              }}
            >
              <Button
                variant={currentPage !== "contact-us" ? "outline" : "default"}
              >
                {CONTACT}
              </Button>
            </Link>
            <Link
              href={"/home"}
              onClick={() => {
                updateCurrentPage("home");
              }}
            >
              <Button
                className="hidden lg:block"
                variant={currentPage !== "home" ? "outline" : "default"}
              >
                {HOME}
              </Button>
            </Link>
          </li>
        </div>
      </div>
      {open && <MobileNavBar setOpen={setOpen} />}
    </>
  );
}
export default NavBar;
