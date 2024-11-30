import React from 'react'
import Carousel from '../../molecules/Carousel/Carousel'
import BannerCard from '@/app/molecules/BannerCard/BannerCard'

const BannerSection = ({banners}:{banners:any}) => {
  return (
    <Carousel id='carouselBottom' showBtns={false}>
      {
        banners.map((bannerData:any)=>{
          return (<BannerCard {...bannerData} />)
        })
      }
      
      {/* <BannerCard />
      <BannerCard /> */}
    </Carousel>
  )
}

export default BannerSection
