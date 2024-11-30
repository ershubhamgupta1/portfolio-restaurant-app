import Image from 'next/image'
import React from 'react'
import ItemCard from '../ItemCard/ItemCard'
import { Item } from '@/app/types/global'

const ItemSection = ({items, title}:{items: Item[], title: string}) => {
    return (
        <div className='container marketing'>
            <h2 className="itemsTitle">{title}</h2>
            <div className="row">
                {
                    items.map(item=>{
                        return (
                            <ItemCard item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemSection;
