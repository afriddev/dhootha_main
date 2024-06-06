export type carouselViewPropsDataType = {
    image:string,
    labe?:string
}[]

export interface CarouselViewInterfaceInterface {
    dataArray?: carouselViewPropsDataType;
    autoPlay?: boolean;
    dots?: boolean;
    speed?: number;
    clientTestimonials?: {
      image: string;
      name: string;
      review: string;
    }[];
    arrows?: boolean;
  }