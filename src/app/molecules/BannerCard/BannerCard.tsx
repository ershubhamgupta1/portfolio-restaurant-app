
import Image from 'next/image'
import React from 'react'

interface BannerProps{
  title:string;
  subtitle:string;
  description:string;
  img:string;
  showImgFirst:boolean

}
const BannerCard = (props: BannerProps) => {
  const {title, subtitle, description, img, showImgFirst} = props;
  return (
      <div className="row featurette">
        {
          showImgFirst &&
          <>
            <BannerImg img={img} />
            <BannerTxt title={title} subtitle={subtitle} description={description}  />
          </>
        }
        {
          !showImgFirst &&
          <>
            <BannerTxt title={title} subtitle={subtitle} description={description}  />
            <BannerImg img={img} />
          </>
        }
      </div>
  )
}

const BannerImg = ({img}:{img:string})=>{
  return (
    <div className="col-md-5">
      <Image src={img} width={400} height={400} alt="Generic placeholder image" />
    </div>
  )
}

const BannerTxt = ({description, title, subtitle}:{description:string, title:string, subtitle:string})=>{
  return (
    <div className="col-md-7">
      <h2 className="featurette-heading">{title} <span className="text-muted">{subtitle}</span></h2>
      <p className="lead">{description}</p>
    </div>

  )
}

export default BannerCard
