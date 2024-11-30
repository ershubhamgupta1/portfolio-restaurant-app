import Image from 'next/image'
import React from 'react'

const ItemCard = () => {
    return (
        <div className='container marketing'>
            <h2 className="itemsTitle">Breakfast</h2>
            <div className="row">
                <div className="col-lg-4">
                    <Image src="/restaurant-images/salate.png" alt="Omelette" width={300} height={300} />
                    <h4>Salates</h4>
                    <p><a className="btn btn-default" href="#" role="button">Add to cart »</a></p>
                </div>
                <div className="col-lg-4">
                    <Image src="/restaurant-images/burger.png" alt="Omelette" width={300} height={300} />
                    <h4>Salates</h4>
                    <p><a className="btn btn-default" href="#" role="button">Add to cart »</a></p>
                </div>
                <div className="col-lg-4">
                    <Image src="/restaurant-images/drinks.png" alt="Omelette" width={300} height={300} />
                    <h4>Salates</h4>
                    <p><a className="btn btn-default" href="#" role="button">Add to cart »</a></p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
