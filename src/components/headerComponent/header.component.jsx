import { Component } from 'react';

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
 class HeaderComponent extends  Component  {

constructor(){
  super();
  // var el = document.querySelector('.cart_icon');
  // el&&document.querySelector('#mainCart').addEventListener('click',()=>{
  //   document.querySelector('.cart_icon .box').classList.toggle('d-block')
  //   })
  this.state ={
    open:false,
    cart:[]
  }

}
componentDidMount(){

  const getCollectionsofShop = async ()=>{
    const collections = await GETCollection();
    console.log(collections)
  }
  getCollectionsofShop();
  
  console.log(this.state)
}
render(){

  return(
    <>
    <div className="header">
<Navbar bg="light" variant="light" fixed="top" className='nav' >
    <Container>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Store</Nav.Link>
       </Nav>
      <Navbar.Brand href="#home">          
        <img src={logo} alt="" srcset="" />
</Navbar.Brand>
        <div className='cart_icon' id='mainCart' href="#features">
            
            <img  src={cartIcon} alt="" srcset="" 
            onClick={()=>this.setState(state=>{
              return{
                ...state ,
                open:!state.open
                
              
              }
             })}/>
            <Badge bg="secondary">0</Badge>

       {
          this.state.open&&   <div className='box'>
             <div className="box_header">
               <p>Your Cart </p> <button className="close"
                onClick={()=>this.setState(state=>state.open=false)}
               >
                 x
               </button>
             </div>
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
<StorePage/>
</>
 )
   }
 
}
export default HeaderComponent