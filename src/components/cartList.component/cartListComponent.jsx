import { Component } from "react";
import { CartItemComponent } from "./cartItemComponent/cartItem.component";

export class CartListComponent extends Component {



    render(){
return(

    <>
    <div className="cartList">
        <CartItemComponent  item={{imageUrl:'https://img-lcwaikiki.mncdn.com/mnresize/1024/-/pim/productimages/20222/5960463/v1/l_20222-w2ag99z8-cvl-82-60-87-174_a5.jpg',name:'hallo',price:'23$'}}/>
    </div>
    </>
)


    }
}