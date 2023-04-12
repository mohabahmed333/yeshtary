import { Component } from "react";
import { CartContext } from "../../../services/contexts/CartContext";
import { LazyLoadImage} from "react-lazy-load-image-component";
export class DirectoryitemComponent extends Component{

constructor(props){
    super(props);
    
}

    render(){

      const {item} = this.props
    return(
  <CartContext.Consumer>
{
  this.context = (cart)=>(
    <>
    <div className="col-md-3 ">
 <div className="item_container">
 <LazyLoadImage effect="blur" src={item.imageUrl} className=" item "  /> 

<div className="name_add_to_cart">
<p>{item.name}</p>

<button className="cart_button_new " onClick={()=>cart.cartFunc( item)} >add To Cart { item.price}</button>
</div>
 </div>
</div>

</>


  )
}

  </CartContext.Consumer>
 

         

 
 

)
    

    }
}