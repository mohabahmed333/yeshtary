import { Component, useContext } from 'react';

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
 import { StorePage } from '../../pages/storepage';
import { CartContext } from '../../services/contexts/CartContext';
import { CartListComponent } from '../cartList.component/cartListComponent';
 class HeaderComponent extends  Component  {
 

constructor(props){
  super(props);
 

}
componentDidMount(){

  
 ;
console.log(this.context.state);
  const getCollectionsofShop = async ()=>{
    const collections = await GETCollection();
    console.log(collections)
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
<Navbar bg="light" variant="light" fixed="top" className='nav' >
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Store</Nav.Link>
       </Nav>
      <Navbar.Brand href="#home">          
        <img src={logo} alt="" />
</Navbar.Brand>
        <div className='cart_icon' id='mainCart' href="#features">
            
            <img  src={cartIcon} alt="" srcset="" 
             onClick={ ()=>updateCart(!state.open) }/>
            <Badge bg="secondary">0</Badge>

       {
         state.open&&   <div className='box'>
             <div className="box_header">
               <p>Your Cart </p> <button className="close"
                onClick={ ()=>updateCart(false) }
               >
                 x
               </button>
             </div>
               <CartListComponent/>
           </div>
       }
        </div >

    </Container>
  </Navbar>
  </div>
  <Carousel>
  <Carousel.Item className='carousel_images' style={{backgroundImage:`url(${'https://images.canadagoose.com/c_scale,f_auto,q_auto:best,w_1920/cg-global/pages/plp-category-banners/flagship/Flagship_Desktop_PLP_Mens07_Puffers.jpg'})`}}>
   
   
    <Carousel.Caption>
      <h3>Explore Our Latest Offers</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className='carousel_images' 
  style={{backgroundImage:`url(${'https://images.canadagoose.com/image/upload/w_1920,c_scale,f_auto,q_auto:best/v1658780840/product-image/2252MB_200_fsch.jpg'})`}}>
   
   
    <Carousel.Caption>
      <h3>Explore Our Latest Offers</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
</>
  )
 
}
</CartContext.Consumer>

 )
   }
 
}
export default HeaderComponent