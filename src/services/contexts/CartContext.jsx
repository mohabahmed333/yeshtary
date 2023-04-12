import { createContext ,Component} from "react";

export const CartContext = createContext({
    open:false,
    cart:[],
    AddToCart:()=>null
});


export class CartContextProvider extends Component {
    state = {
        open:false,
        items:[],
        AddToCart:()=>null,
        quantity:0,
        total:0
     }
     updateCartOpening = open=>this.setState(state=>state.open=open);



   HandleCartItems = (items,productItem)=>{
    const existingItem= items.find(product=>product.id===productItem.id)
  if(existingItem){
   return this.state.items.map(cartItem=>cartItem.id===productItem.id
      ?{...cartItem,
          quantity:cartItem.quantity+1
      } 
      :cartItem
      )
  }
  
  return [...this.state.items ,{...productItem,quantity:1}]
}

// calculate quantity and price
 HandleQuantityPrice= (newItems)=>{
   const PaidItems = newItems.reduce((price,item)=>{
       return price+item.price*item.quantity
  },0);
   const newCalCulateItem =newItems.reduce((total,product)=>{
      return total+product.quantity
  },0);

   this.setState(state=>{
    return{
      ...state,
      quantity:newCalCulateItem,
      total:PaidItems
    }
   })
 }

 



AddToCart= (productItem)=>{
;
 this.setState((state)=>{return{...state,items:this.HandleCartItems(this.state.items,productItem)}},()=> this.HandleQuantityPrice(this.state.items) ) ;


}
RemoveFromCart = (product)=>{
this.setState(state=>{return{...state
  ,items:state.items.
  filter(item=>item.id!==product.id)

}
},()=>{this.HandleQuantityPrice(this.state.items)})
}
render() { 
      return (
        <CartContext.Provider value={ {state: this.state,updateCart:this.updateCartOpening,cartFunc:this.AddToCart,rmvCart:this.RemoveFromCart} }>
          {this.props.children}
        </CartContext.Provider>
      )
    }
  }
 