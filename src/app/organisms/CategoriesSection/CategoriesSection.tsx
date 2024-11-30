import React from 'react'
import CategoryCarousel from '../CategoryCardCarousel/CategoryCardCarousel'
import { Category, Item } from '@/app/types/global';

const CategoriesSection = async () => {
  const response = await fetch('http://localhost:3000/api/items');
  const { items, categories } = await response.json();

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
