import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface CarouselProps {
  items: [];
}

export function Carousel({ items }: CarouselProps) {
  return <AliceCarousel items={items} />;
}
