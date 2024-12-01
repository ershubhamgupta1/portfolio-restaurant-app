import { Item } from "@/app/types/global";
import Carousel from "../../molecules/Carousel/Carousel"
import ItemSection from "@/app/molecules/ItemSection/ItemsSection";

const CategoryCarousel = ({ id, title, catItems }: { id: string, title: string, catItems: Item[] }) => {
  const chunkedItems = [];
  for (let i = 0; i < catItems.length; i += 3) {
    chunkedItems.push(catItems.slice(i, i + 3));
  }
  return (
    <Carousel id={id} showBtns={true}>
      {
        chunkedItems.map(itemsChunk => {
          return (
            <ItemSection items={itemsChunk} title={title} />
          )
        })
      }
    </Carousel>

  )
}

export default CategoryCarousel;