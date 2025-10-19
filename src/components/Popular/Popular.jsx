import React from "react";
import "./Popular.css"
import data_product from "../Assets/data"
import Item from "../items/item"

function Popular() {

    return(
        <>
<div className="popular ">
    <h1 className="text-2xl sm:text-[60px]">Popular in Women</h1>
    <hr className="h-10px m-5"/>
    <div className="popular-item grid justify-center grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2] place-items-center">
        {data_product.map(
            (item, index)=> <Item key={index} id={item.id} 
            name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
        )}
    </div>
</div>
        
        </>
    )
}
export default Popular