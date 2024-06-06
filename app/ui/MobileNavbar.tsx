"use client";
import Link from "next/link";
import {
  ABOUT_US,
  BLOG,
  CONTACT,
  HOME,
  PORTFOLIO,
} from "../utils/appConstants";

function MobileNavBar() {
  return (
    <div className="absolute">
      <li>
        <Link href={"/home"}>{HOME}</Link>
        <Link href={"/portfolio"}>{PORTFOLIO}</Link>
        <Link href={"/about"}>{ABOUT_US}</Link>
        <Link href={"/contact-us"}>{CONTACT}</Link>
      </li>
    </div>
  );
}

export default MobileNavBar;
