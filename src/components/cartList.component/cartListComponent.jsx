import { Component } from "react";
import { CartItemComponent } from "./cartItemComponent/cartItem.component";
import { CartContext } from "../../services/contexts/CartContext";

export class CartListComponent extends Component {



    render(){
return(

    <>
    <CartContext.Consumer>
{this.context = (cart)=>{
     return  <div className="cartList">
    {
        cart.state.items.map(item=>

            <CartItemComponent cartContext={cart} key={item.name} item={item}/>
        )
    }
</div>
}}
  
        </CartContext.Consumer>
    </>
)


    }
}