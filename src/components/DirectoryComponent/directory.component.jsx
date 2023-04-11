import { Component } from "react";
import { GETCollection } from "../../fireBase/firebaseMethods/GetCollectionsMethod";
import { Link } from "react-router-dom";
import './directoryComponent.scss'
export class DirectoryComponent extends Component{

constructor(props){
super(props);
this.state={
    collectionItems:{}
       }
}
componentDidMount(){
    try{
const collections = async ()=>{
    const shopCollections  = await GETCollection();
    shopCollections&& this.setState((state)=>{
        return{
            ...state,collectionItems:shopCollections  
        }

    })
};
collections()

    }catch(err){
console.log(err);
    }
}
    render(){
     
        const{ collectionItems} =this.state
return(
    <>
{
   collectionItems&& Object.keys(collectionItems).map(title=>{
 const {collImg ,routeName,items} =collectionItems[title]
console.log(collImg);
        
       return(<>
       
     
  <div className='all_container'>
  <div className='collection_preview_background' style={{backgroundImage:`url(${collImg})`}
}  >

<div className='collection_text_preview'>
    <p>get New Our New Collections <br/>
    Check out Our New Arrival !
    </p>
    <h3> {routeName}   <Link className='logo-container'
     to={ `${routeName}${routeName}`} >

 
</Link></h3>

</div>
</div>
   <div className="container-fluid"  style={{zIndex:'2 !important'}}>
  
  <div  key={routeName}  className="collection-preview title  position-sticky mt-1 pt-1 p_t">
    <div className=" title_parent">
    
</div>

    </div>
    </div>
 <div className="container-fluid">
    <div className="row">

 {
     items.reverse().filter((item,idx)=>idx<4).map(item=>{
    
        return(
            <div className="col-md-3 item " style={{backgroundImage:`url(${item.imageUrl})`}}>
<div className="name_add_to_cart">
    <p>{item.name}</p>

    <button className="cart_button_new ">add To Cart {item.price}</button>
    </div>
            </div>
        )
    })
}
</div>
 </div>
</div>
<div className='more'><p>
shop All Collections 
  </p>        <i class="fa-solid fa-arrow-right arrow-right"></i>
</div> 

       </>)
    })
}

</>
)
    }

}