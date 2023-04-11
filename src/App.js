 import './App.scss';
import  HeaderComponent from './components/headerComponent/header.component';
import { Component } from 'react';
import { StorePage } from './pages/storePage/storepage';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Home.page';
 class App extends Component {
render(){
  return (
    <>
    <Routes>
 <Route path='/' element={<HeaderComponent/>} >

  <Route index element={<HomePage/>}/>

  <Route path='shop/*' element={<StorePage/>}/>
 </Route>


       </Routes>
    </>
  );
}
}

export default App;
