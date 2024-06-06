import { cn } from "../../@/lib/utils";
interface OurServiceCardInterface {
  image: string;
  title: string;
  desc: string;
  className?: string;
}
function OurServicesCard({
  image,
  title,
  desc,
  className,
}: OurServiceCardInterface) {
  return (
    <div
      className={cn(
        `flex flex-col items-center gap-y-4 
      rounded-xl border p-3 py-6 shadow-xl hover:scale-105 `,
        className,
      )}
    >
      <h3 className="text-center text-2xl font-bold text-secondary-foreground lg:border-b-2 lg:pb-1 lg:text-nowrap ">
        {title}
      </h3>
      <img
        src={image}
        className="m-3 h-[25vh]  w-[80vw] rounded-md object-fill lg:h-[35vh] lg:w-[30vw]"
      />
      <p className="text-pretty px-6 text-center font-normal "> {desc}</p>
    </div>
  );
}
export default OurServicesCard;
