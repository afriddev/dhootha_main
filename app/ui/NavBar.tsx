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
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-24  w-full items-center bg-secondary  ">
      <HiOutlineMenuAlt4 className="absolute right-6 float-right block h-7 w-7 cursor-pointer lg:hidden" />
      <div
        onClick={() => {
          navigate("/");
        }}
        className="absolute left-4 w-20 text-wrap lg:left-8  lg:w-fit "
      >
        <label className=" flex items-center gap-x-1 text-xl font-medium lg:cursor-pointer lg:text-3xl lg:hover:scale-105">
          {DOOTHA_PROMOTIONS}
        </label>
      </div>
      <div className="absolute right-10 hidden lg:block">
        <li className="flex list-none items-center gap-x-10">
          <Button
            onClick={() => {
              navigate("/portfolio");
            }}
            variant={"outline"}
          >
            {PORTFOLIO}
          </Button>
          <Button variant={"outline"}>{BLOG}</Button>
          <Button
            variant={"outline"}
            onClick={() => {
              navigate("/about-us");
            }}
          >
            {ABOUT_US}
          </Button>
          <Button
            variant={"outline"}
            onClick={() => {
              navigate("/contact-us");
            }}
          >
            {CONTACT}
          </Button>
          <Button
            onClick={() => {
              navigate("/home");
            }}
            className="hidden lg:block"
          >
            {HOME}
          </Button>
        </li>
      </div>
    </div>
  );
}
export default NavBar;
