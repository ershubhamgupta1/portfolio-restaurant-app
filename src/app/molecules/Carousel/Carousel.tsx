import Image from 'next/image'
import React from 'react'
import './Carousel.module.css'

interface CarouselProp {
  id: string;
  children: any;
  showBtns?: boolean
}

const Carousel = (props: CarouselProp) => {
  const { id, children, showBtns } = props;
  return (
    <div id={id} className="container carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
      <div className="carousel-inner">
        {
          children.map((children: any, index: number) => {
            return (
              <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
                {children}
              </div>
            )
          })
        }
      </div>
      {
        showBtns &&
        <>
          <button
            className="carousel-control-prev"
            type="button"
            // data-bs-target="#carouselBottom"
            data-bs-target={`#${id}`}
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${id}`}
            // data-bs-target="#carouselBottom"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      }
    </div>
  )
}

export default Carousel
