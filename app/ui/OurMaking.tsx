import { ReactNode } from "react";
import LabelLegend from "./LabelLegend";
interface OurMakingsInterface {
  legendLabel: string;
  legendStyle: string;
  showCaseProducts: {
    heading: string;
    headingDesc: string;
    hasVideo?: boolean;
    videos?: ReactNode;
    images?: string[];
  }[];
}

function OurMakings({
  legendLabel,
  showCaseProducts,
  legendStyle,
}: OurMakingsInterface) {
  return (
    <div className="flex w-full flex-col gap-y-4  ">
      {showCaseProducts?.map((item, index) => {
        return (
          <div
            key={index}
            className="r flex flex-col gap-y-2 pl-3 lg:flex-row lg:items-center lg:justify-center"
          >
            <div className="flex flex-col gap-y-4 lg:pr-32">
              <LabelLegend label={legendLabel} className={legendStyle} />

              <h4 className="font-semiold text-2xl ">{item?.heading}</h4>
              <p className="font-normal">{item?.headingDesc}</p>
            </div>
            <div className="flex flex-col gap-y-3">
              {item?.hasVideo
                ? item.videos
                : null}
            </div>
            <div className="flex flex-col gap-y-3">
              {item?.images && item?.images?.length > 0
                ? item?.images.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="hover:scale-105 lg:h-[40vh] lg:w-[40vw]"
                      >
                        <img
                          key={index}
                          className=" items-stretch rounded-md object-fill lg:h-[40vh] lg:w-full"
                          src={item}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default OurMakings;
