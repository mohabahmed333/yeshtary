import { Component, Fragment, useContext } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  cartIcon from '../../images/icons_svg/cart2-svgrepo-com.svg';
import  logo from '../../images/icons_svg/_a7d5821c-7530-4989-b3c4-fb9ab3496565.jpg';
import './header.component.scss'
import Carousel from 'react-bootstrap/Carousel';
import { Badge } from 'react-bootstrap';
import { render } from '@testing-library/react';
import { GETCollection } from '../../fireBase/firebaseMethods/GetCollectionsMethod';
 import { StorePage } from '../../pages/storePage/storepage';
import { CartContext } from '../../services/contexts/CartContext';
import { CartListComponent } from '../cartList.component/cartListComponent';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import EmptyCart from '../../images/106964-shake-a-empty-box.gif'
 class HeaderComponent extends  Component  {
 

constructor(props){
  super(props);
 

}
componentDidMount(){

  
 ;
   const getCollectionsofShop = async ()=>{
    const collections = await GETCollection();
   }
  getCollectionsofShop();
  
}
  HandleClick=()=>{
   
 }
render(){
   return(
    <CartContext.Consumer
    >
{  this.context=({state,updateCart})=>(
    <>
    <div className="header">
<Navbar   variant="light" fixed="top" className='nav' >
    <Container>
      <Nav className="me-auto">
        <Link className='nav-item link' to={'/'}>Home</Link>
        <Link className='nav-item link' to={'shop'} >Store</Link>
        <Link className='nav-item link' to={'about'} >About</Link>
       </Nav>
      <Link className='navbar-brand'  to={'/'} >          
        <img src={logo} alt="logo" />
</Link>
        <div className='cart_icon' id='mainCart' href="#features">
            
            <img  src={cartIcon} alt="shopping cart"  
             onClick={ ()=>updateCart(!state.open) }/>
            <Badge bg="secondary">{state.quantity}</Badge>

       {
         state.open&&   <div className='box'>
             <div className="box_header">
               <p>Your Cart </p> <button className="close"
                onClick={ ()=>updateCart(false) }
                >
                 x
               </button>
             </div>
             <div className="t_totla">

                 <p>Total  Price </p>
                <p>
                {state.total}$
                   </p> 
                   </div>
                   <div className='emptyCart'>
                   {
                     state.items.length===0&&
            <Fragment>
                       <h6>Your Cart is Empty !</h6>
                     <img src={EmptyCart} alt='emptyCart' style={{width:'200px'}} />
            </Fragment>
                    }
                    </div>
               <CartListComponent/>
             

                
           </div>
       }
        </div >

    </Container>
  </Navbar>
  </div>
<Outlet/>
</>
  )
 
}
</CartContext.Consumer>

 )
   }
 
}
export default HeaderComponent