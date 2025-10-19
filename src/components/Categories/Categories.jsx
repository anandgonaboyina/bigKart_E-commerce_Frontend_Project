import products from "../Assets/all_product"
import Item from "../items/item"
console.log(products)
function Categories(){
    let mens = products.filter((product)=>product.category=="men")
        let womens = products.filter((product)=>product.category=="women")
        let kids = products.filter((product)=>product.category=="kid")

    return (
        <>
        <h1 className="text-base-200 text-lg font-bold text-center">for Mens </h1>
        <hr />
        <div className="grid mt-2 place-items-center grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2]  items-center"> 
        {   //above justify-center not worked place items center used
            mens.map(
                (item)=> {
                    return (
                        <Item key={item.id} id={item.id} 
            name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    )
                 }
            )
        }
        </div>
                <h1 className="text-base-200 text-lg font-bold text-center">for Womens </h1>
        <hr />
        <div className="grid mt-2 place-items-center grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2]  items-center"> 
        {   //above justify-center not worked place items center used
            womens.map(
                (item)=> {
                    return (
                        <Item key={item.id} id={item.id} 
            name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    )
                 }
            )
        }
        </div>
                        <h1 className="text-base-200 text-lg font-bold text-center">for Kids </h1>
        <hr />
        <div className="grid mt-2 place-items-center grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2]  items-center"> 
        {   //above justify-center not worked place items center used
            kids.map(
                (item)=> {
                    return (
                        <Item key={item.id} id={item.id} 
            name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    )
                 }
            )
        }
        </div>
        </>
    )
}
export default Categories