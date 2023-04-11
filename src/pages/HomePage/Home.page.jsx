import { Component } from "react";
import { Carousel } from "react-bootstrap";
import { DirectoryComponent } from "../../components/DirectoryComponent/directory.component";

export class HomePage extends Component{



    render(){
        return(
            <>  <Carousel>
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
            <DirectoryComponent/>
            </>
        )
    }
}