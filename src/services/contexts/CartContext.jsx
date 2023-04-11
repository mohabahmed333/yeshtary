import { createContext ,Component} from "react";

export const CartContext = createContext({
    open:false,
    cart:[],
    addToCart:()=>null
});


export class CartContextProvider extends Component {
    state = {
        open:false,
        cart:[],
        addToCart:()=>null,
     }
     updateCartOpening = open=>this.setState(state=>state.open=open,(state)=>console.log(state))
    render() {
      return (
        <CartContext.Provider value={ {state: this.state,updateCart:this.updateCartOpening} }>
          {this.props.children}
        </CartContext.Provider>
      )
    }
  }
 