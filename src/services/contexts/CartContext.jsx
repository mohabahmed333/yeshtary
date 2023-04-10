import { createContext } from "react";

const CartContext = createContext({
    open:false,
    cart:[],
    addToCart:()=>null
});



 