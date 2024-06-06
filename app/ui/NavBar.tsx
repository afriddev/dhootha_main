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

function NavBar() {
  return (
    <div className="relative flex h-24  w-full items-center bg-secondary  ">
      <HiOutlineMenuAlt4 className="absolute right-6 float-right block h-7 w-7 cursor-pointer lg:hidden" />
      <Link
        href={"/"}
        className="absolute left-4 w-20 text-wrap lg:left-8  lg:w-fit "
      >
        <p className=" flex items-center gap-x-1 text-xl font-medium lg:cursor-pointer lg:text-3xl lg:hover:scale-105">
          {DOOTHA_PROMOTIONS}
        </p>
      </Link>
      <div className="absolute right-10 hidden lg:block">
        <li className="flex list-none items-center gap-x-10">
          <Link href={"/portfolio"}>
            <Button variant={"outline"}>{PORTFOLIO}</Button>
          </Link>
          <Button variant={"outline"}>{BLOG}</Button>
          <Link href={"/about"}>
            <Button variant={"outline"}>{ABOUT_US}</Button>
          </Link>
          <Link href={"/contact-us"}>
            <Button variant={"outline"}>{CONTACT}</Button>
          </Link>
          <Link href={"/home"}>
          <Button
           
            className="hidden lg:block"
          >
            {HOME}
          </Button></Link>
        </li>
      </div>
    </div>
  );
}
export default NavBar;
