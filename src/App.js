import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Cart from './Component/Cart';
import Modal from './Component/Modal';
import Navbar from './Component/Navbar';
import Products from './Component/Products';
import ProductView from './Component/ProductView';



function App() {
  const user = true
  return (
    <div className="App">
      
      <Router>
        <Navbar user={user} />
        <Route path='/' exact component={Products}/>
        <Route path="/products/:id" exact component={ProductView}/>
        <Route path='/cart' exact component={Cart}/>
        <Route path='/modal' exact component={Modal}/>
      </Router> 
    </div>
  );
}

export default App;
