import { Component } from "react";
import { CartContext } from "../../../services/contexts/CartContext";

export class DirectoryitemComponent extends Component{

constructor(props){
    super(props);
    
}

    render(){
    return(
  <CartContext.Consumer>
{
  this.context = (cart)=>(
    <>
    <div className="col-md-3 ">
   <div className=" item " style={{backgroundImage:`url(${this.props.item.imageUrl})`}}> 

</div>
<div className="name_add_to_cart">
<p>{this.props.item.name}</p>

<button className="cart_button_new " onClick={()=>cart.cartFunc(this.props.item)} >add To Cart {this.props.item.price}</button>
</div>
</div>

</>


  )
}

  </CartContext.Consumer>
 

         

 
 

)
    

    }
}