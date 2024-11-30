import React from 'react'
import Carousel from '../../molecules/Carousel/Carousel'
import BannerCard from '@/app/molecules/BannerCard/BannerCard'

const BannerSection = () => {
  return (
    <Carousel id='carouselBottom'>
      <BannerCard />
      <BannerCard />
      <BannerCard />
    </Carousel>
  )
}

export default BannerSection
