import { Component } from "react";
import { CartItemComponent } from "./cartItemComponent/cartItem.component";
import { CartContext } from "../../services/contexts/CartContext";

export class CartListComponent extends Component {



    render(){
return(

    <>
    <CartContext.Consumer>
{this.context = (cart)=>{
    console.log(cart)
    return  <div className="cartList">
    {
        cart.state.items.map(item=>

            <CartItemComponent  item={{imageUrl:item.imageUrl  ,name:item.name,price:item.price,quantity:item.quantity}}/>
        )
    }
</div>
}}
  
        </CartContext.Consumer>
    </>
)


    }
}