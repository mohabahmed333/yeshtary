 import './App.scss';
import  HeaderComponent from './components/headerComponent/header.component';
import { Component } from 'react';
import{CartContextProvider} from './services/contexts/CartContext'
import { StorePage } from './pages/storepage';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
render(){
  return (
    <BrowserRouter>
    <CartContextProvider>

    <div className="App">
 <HeaderComponent/>
<StorePage/>

    </div>
    </CartContextProvider>
    </BrowserRouter>
  );
}
}

export default App;
