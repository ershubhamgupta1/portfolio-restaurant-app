import { Item } from '@/app/types/global'
import Image from 'next/image'
import React from 'react'

const ItemCard = ({ item }: { item: Item }) => {
    return (
        <div className="col-lg-4">
            <Image src={item.img} alt="Omelette" width={300} height={300} />
            <h4>{item.title}</h4>
            <p><a className="btn btn-default" href="#" role="button">Add to cart »</a></p>
        </div>

    )
}

export default ItemCard
