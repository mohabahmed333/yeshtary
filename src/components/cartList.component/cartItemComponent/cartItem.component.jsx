import { Component } from "react";
import './cartItemComponent.scss'
export class CartItemComponent extends Component{

constructor(props){
    super(props)
    ;
    console.log(props.item);

}
render(){
    return(


    <>
    <div className="cartItem">
        <img src={this.props.item.imageUrl} alt={this.props.item.name}   />
        <div className="name_price">
            <p>{this.props.item.name}</p>
            <p>{this.props.item.price}</p>
        </div>
    </div>

    </>
    )
}

    
}