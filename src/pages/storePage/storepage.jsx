import { Component } from "react";
import { DirectoryComponent } from "../../components/DirectoryComponent/directory.component";
import {Routes, Route} from 'react-router-dom'
import { Category } from "../categoryPage/categoriePage";
  export class StorePage extends Component{
constructor(props){
    super(props);
 
}


    render(){
        return <>
        
      <Routes>
<Route index element={<DirectoryComponent/>}/>
<Route path=':cat' element={<Category/>}/>
      </Routes>
        </>
    }
}