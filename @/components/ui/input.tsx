import * as React from "react";
import { cn } from "../../lib/utils";
import { BsPerson } from "react-icons/bs";
import { BsPersonVcard } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone, FiMessageSquare } from "react-icons/fi";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const IconInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, alt, accept, ...props }, ref) => {
    function getIcon(iconName: string) {
      switch (iconName) {
        case "FN":
          return <BsPerson className="h-5 w-5 " />;
        case "LN":
          return <BsPersonVcard className="h-5 w-5 " />;
        case "EMAIL":
          return <MdOutlineMail className="h-5 w-5 " />;
        case "PHONE":
          return <FiPhone className="h-5 w-5 " />;
        case "MESSAGE":
          return <FiMessageSquare className="h-5 w-5 " />;
      }
    }

    return (
      <div onBlur={()=>{
        const acceptClassName =  document.getElementById("accept"+accept);
       (acceptClassName as any).className =  "absolute left-10 text-xs top-[0.7rem] text-secondary-foreground/80 ease-in-out animate-out"

      }}
      onClick={()=>{
       const acceptClassName =  document.getElementById("accept"+accept);
       (acceptClassName as any).className =  "absolute left-10 text-xs -top-[0.8rem]  bg-background text-secondary-foreground/80 animate-in px-1"
       document.getElementById(accept!)?.focus()
      }} className="relative flex items-center ">
        <label className="absolute left-10 text-xs top-[0.7rem] text-secondary-foreground/80 ease-in-out bg-transparent  " id={"accept"+accept}>{accept}</label>
        <a className="absolute left-2 z-[900]  ">
          {" "}
          {getIcon(alt!)}
        </a>
        <input 
        id={accept}
          type={type}
          className={cn(
            "flex h-10 w-[90vw] lg:w-[30vw] rounded-md border border-input bg-background  px-8 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground before:only:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed  disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
IconInput.displayName = "Input";

export { IconInput };
