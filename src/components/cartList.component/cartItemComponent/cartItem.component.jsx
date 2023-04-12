import { Component } from "react";
import './cartItemComponent.scss'
export class CartItemComponent extends Component{

constructor(props){
    super(props)
    ;
 
}
render(){

    const{imageUrl,name,price,quantity}=this.props.item
    return(


    <>
    <div className="cartItem">
        <img src={imageUrl} alt={name}   />
        <div className="name_price">
            <p>{name}</p>
            <div className="rfc">

            <p className="price_qu">{price} <span className="qu">Qta {quantity}</span></p>
            <button onClick={()=>this.props.cartContext.rmvCart(this.props.item)}>remove</button>
            </div>
        </div>
    </div>

    </>
    )
}

    
}