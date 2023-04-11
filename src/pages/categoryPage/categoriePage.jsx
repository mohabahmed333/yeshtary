import { Component } from "react";
import { GETCollection } from "../../fireBase/firebaseMethods/GetCollectionsMethod";

export class Category extends Component{
constructor(){
super();
this.state={
    path:'',
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
    collections();
    this.setState(state=>{return{...state,path:window.location.href.split('/')[4]}},state=>console.log(state));

 }
catch(err){
console.log(err)

}

}
 

    render(){
 
        return(

            <>

            <h5>     
                
                
                       hallo from categoryPage
</h5>
            </>
        )
    }
}

 