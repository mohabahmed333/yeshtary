import { Component } from "react";
import { GETCollection } from "../../fireBase/firebaseMethods/GetCollectionsMethod";
import { useParams } from "react-router";
import{Link} from 'react-router-dom';
import './category.scss'
import { DirectoryitemComponent } from "../../components/DirectoryComponent/directory_item.component/directoryItem.component";
 class Category extends Component{
constructor(props){
super(props);
this.state={
    path:window.location.href.split('/')[4],
    collectionItems:{},
    category:{}
}
}
AddCategory= ()=>{
   this.setState(state=>{
    return{
        ...state,
        category:state.collectionItems[state.path]
    }
   })
}
componentDidMount(){

try{
    const collections = async ()=>{
        const shopCollections  = await GETCollection();
        shopCollections&& this.setState((state)=>{
            return{
                ...state,collectionItems:shopCollections  
            }
    
        },()=>{
          this.AddCategory(this.state)
        })
     };
    collections();
 
 }
catch(err){
console.log(err)

}
  
 
}
 
 


  ChangeRouting=()=>{
    this.setState(state=>({...state,
        path:window.location.href.split('/')[4],
        
    
    }),()=>{
        this.AddCategory()

    })
  }
    render(){

      const {items,collImg
        ,routename} = this.state.category
        
         return(

            <>

<div className="wrapper">

<div className='categories_flex'>
           <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {Object.keys(this.state.collectionItems).map((title) => (
                         <li key={title}   onClick={this.ChangeRouting} >
                          <Link to={`/shop/${title}`} 
                          className="block px-2 py-3">
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
           </div>


           <div className="categoryImage" style={{backgroundImage:`url(${collImg})`}}></div>
<div className="container-fluid">
  <div className="row">
    {
    items&& items.length!==0&& items.map(item=>{
      return  <DirectoryitemComponent  key={item.id} item={item}/>
      })
    }
  </div>
</div>
</div>
            </>
        )
    }
}

 
  export default Category;