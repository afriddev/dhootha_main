import { NAME1, REVIEW1,NAME2, REVIEW2,NAME3, REVIEW3 } from "../utils/appConstants";
import CarouselView from "./CarouselView";

function ClientTestimonials() {
  return (
    <CarouselView   arrows={true}
      clientTestimonials={[
        {
          image: "testimonials/1.png",
          name: NAME1,
          review: REVIEW1,
        },
        {
          image: "homeMain2.jpg",
          name: NAME2,
          review: REVIEW2,
        },
        {
          image:"testimonials/3.jpg",
          name: NAME3,
          review: REVIEW3,
        },
      ]}
    />
  );
}
export default ClientTestimonials