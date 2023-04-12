 import './App.scss';
import  HeaderComponent from './components/headerComponent/header.component';
import { Component, Suspense } from 'react';
import { StorePage } from './pages/storePage/storepage';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Home.page';
import ABoutUs from './pages/aboutus/AboutUs.component';
import { lazy } from 'react';
const LazyAboutPage = lazy(()=>import('./pages/aboutus/AboutUs.component.jsx'))

 class App extends Component {
render(){
  return (
    <>
    <Routes>
 <Route path='/' element={<HeaderComponent/>} >

  <Route index element={<HomePage/>}/>

  <Route path='shop/*' element={<StorePage/>}/>
  <Route path='about' element={<Suspense fallback='loading...'><LazyAboutPage/></Suspense>}/>
 </Route>


       </Routes>
    </>
  );
}
}

export default App;
