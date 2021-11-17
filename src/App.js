import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Cart from './Component/Cart';
import Navbar from './Component/Navbar';
import Products from './Component/Products';
import ProductView from './Component/ProductView';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Route path='/' exact component={Products}/>
        <Route path="/products/:id" exact component={ProductView}/>
        <Route path='/cart' exact component={Cart}/>
      </Router> 
    </div>
  );
}

export default App;
