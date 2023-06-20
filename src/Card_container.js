 import Title from "./Title";
import { Product } from "./Product";
import Card from "./card";
 export default function Card_container(){

const new_product=Product.map((e)=>{
   return( <Card key={e.id} img={e.img} name={e.name} price={e.price} />)
})
    return(
        <div className="Card_container">
             <Title title="Product"/>
             <div className="Card-box">
                {new_product}
             </div>
        </div>
    )
 }