import { Component, Suspense, lazy } from "react";
import { DirectoryComponent } from "../../components/DirectoryComponent/directory.component";
import {Routes, Route} from 'react-router-dom'
 const CategoryLazy = lazy(()=>import('../categoryPage/categoriePage'))
  export class StorePage extends Component{
constructor(props){
    super(props);
 
}


    render(){
        return <>
        
      <Routes>
<Route index element={<DirectoryComponent/>}/>
<Route path=':cat' element={<Suspense fallback='loading ....'> <CategoryLazy/></Suspense>}/>
      </Routes>
        </>
    }
}