
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const bannerImags = [
  {img:"./banners/banner5.jpg"},
  { img: "./banners/banner1.jpg" },
  { img: "./banners/banner2.jpg" },
  {img:"./banners/banner3.jpg"},
  {img:"./banners/banner4.jpg"},
];

export const Banner = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {[...Array(5)].map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex border-2 rounded-[15px] overflow-hidden items-center justify-center">
              <img
                className="w-full object-cover object-[0, -50px]"
                src={bannerImags[index]?.img}
                alt=""
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
