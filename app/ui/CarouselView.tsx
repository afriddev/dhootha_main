import Slider from "react-slick";
import { CarouselViewInterfaceInterface } from "../types/homePageDataTypes";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

function CarouselView({
  dataArray,
  autoPlay,
  dots,
  speed,
  clientTestimonials,
  arrows,
}: CarouselViewInterfaceInterface) {
  const [nextDisabled, setNextDisabled] = useState<boolean>(false);
  const [prevDisabled, setPrevDiasbled] = useState<boolean>(true);

  const settings = {
    dots: dots ? true : false,
    infinite: !arrows,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: speed ? speed : 2000,
    afterChange: function (index: number) {
      if (index > 0) setPrevDiasbled(false);
      if (index === 0) setPrevDiasbled(true);
      if (index === (clientTestimonials?.length as never) - 1)
        setNextDisabled(true);
      if (index < (clientTestimonials?.length as never) - 1)
        setNextDisabled(false);
    },
    nextArrow: <NextArrow disabled={nextDisabled} />,
    prevArrow: <PrevArrow disabled={prevDisabled} />,
    arrows: arrows,
  };

  return (
    <Slider
      {...settings}
      className={`relative flex w-full max-w-[92vw] items-center justify-center rounded-lg ${clientTestimonials?"lg:max-w-[100vw]   lg:h-[70vh]":"lg:max-w-[50vw]  "}`}
    >
      {dataArray &&
        dataArray.length > 0 &&
        !clientTestimonials &&
        dataArray?.map((item, index) => {
          return (
            <div key={index} className="min rounded">
              <img
                src={item.image}
                className=" mr-2 h-[30vh] w-full rounded-lg object-fill  lg:h-[60vh] "
              />
            </div>
          );
        })}
      {clientTestimonials &&
        clientTestimonials.length > 0 &&
        clientTestimonials.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center  p-4 text-primary-foreground "
            >
              <div className="flex flex-col items-center gap-y-4">
                <img
                  src={item.image}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <label className="text-nowrap text-center text-3xl font-semibold ">
                  {item.name}
                </label>
              </div>
              <div>
                <p className="mt-4 px-8 lg:px-[20vw] text-center  font-normal text-primary-foreground/80  ">
                  {item.review}
                </p>
              </div>
            </div>
          );
        })}
    </Slider>
  );
}
export default CarouselView;

function NextArrow(props: any) {
  const { onClick, disabled } = props;

  return (
    <div className="cursor-pointer">
      <FaChevronRight
        onClick={onClick}
        className={`absolute  right-[0.1rem] z-[900] h-10 w-7 rounded-md border bg-primary-foreground p-2 text-black ${disabled ? "text-primabg-primary-foreground/20 bg-primary-foreground/10" : "bg-primary-foreground text-black"}  shadow-xl `}
      />
    </div>
  );
}
function PrevArrow(props: any) {
  const { onClick, disabled } = props;
  return (
    <div className="cursor-pointer">
      <FaChevronLeft
        onClick={onClick}
        className={`absolute z-[900] h-10 w-7 rounded-md border bg-primary-foreground p-2 text-black ${disabled ? "text-primabg-primary-foreground/20 bg-primary-foreground/10" : "bg-primary-foreground text-black"} shadow-xl`}
      />
    </div>
  );
}
