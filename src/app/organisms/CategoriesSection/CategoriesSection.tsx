import React from 'react'
import CategoryCarousel from '../CategoryCardCarousel/CategoryCardCarousel'
import { Category, Item } from '@/app/types/global';

interface CategoriesSectionProps {
  items:any;
  categories:any;
  banners:any
}
const CategoriesSection = async (props:CategoriesSectionProps) => {
  const {items, categories, banners} = props;
  return (
    <>
      {
        categories.map((category: Category, index: number) => {
          const catItems = items.filter((item: Item) => item.categoryId === category.id);
          return (
            <CategoryCarousel id={category.title} title={category.title} catItems={catItems} />
          )
        })
      }
    </>
  )
}

export default CategoriesSection
