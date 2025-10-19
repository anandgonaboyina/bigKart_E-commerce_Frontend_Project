import React from "react";
import "./item.css"
function Item(prop) {

    return(
        <>
        {/* <div className="item select-none min-w-[160px] sm:min-w-[220px] lg:min-w-[260px] hover:scale-[1.05] transition duration-300 mb-4 bg-white rounded-md shadow-lg p-2">
            <img src={prop.image} alt="" />
            <p className="my-[6px]">{prop.name}</p>
            <div className="item-prices flex gap-[20px]">
                <div className="item-price-new text-blue-400 text-[20px] sm:text-[50px]">
                        {prop.new_price+100}&#8377;
                </div>
                <div className="item-price-old text-orange-600 text-[18px] sm:text-[30px] line-through">
                        {prop.old_price +100}&#8377;
                </div>
            </div>
        </div> */}

<div className="card bg-base-100 w-35 lg:w-96 shadow-sm mb-2 hover:scale-[1.05] transition duration-300">
  <figure>
    <img
      src={prop.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    {/* <h2 className="card-title">
  
      <div className="badge badge-secondary">NEW</div>
    </h2> */}
    <p> {prop.name}</p>
    <div className="card-actions justify-end">
            <div className="item-prices flex gap-[10px]">
                <div className="item-price-new text-blue-400 text-[20px] sm:text-[50px]">
                        {prop.new_price+100}&#8377;
                </div>
                <div className="item-price-old text-orange-600 text-[18px] sm:text-[30px] line-through">
                        {prop.old_price}&#8377;
                </div>
            </div>
    </div>
  </div>
</div>


        </>
    )
}
export default Item