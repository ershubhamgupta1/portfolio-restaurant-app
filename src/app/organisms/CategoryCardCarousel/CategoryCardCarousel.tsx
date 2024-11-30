import Image from "next/image"
import Carousel from "../../molecules/Carousel/Carousel"
import ItemCard from "@/app/molecules/ItemCard/ItemCard";

const CategoryCarousel = ({ id }: { id: string }) => {
    return (
      <Carousel id={id}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </Carousel>
  
    )
  }
  
  export default CategoryCarousel;