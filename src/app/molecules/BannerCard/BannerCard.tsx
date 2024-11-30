
import Image from 'next/image'
import React from 'react'

const BannerCard = () => {
  return (
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Fish and Chips <span className="text-muted">It's very very testy</span></h2>
          <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
        </div>
        <div className="col-md-5">
          <Image src="/restaurant-images/burger.png" width={400} height={400} alt="Generic placeholder image" />
        </div>
      </div>
  )
}

export default BannerCard
