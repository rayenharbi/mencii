import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart'
import { BrowserRouter as Router ,  Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './pages/Contact';
// import img4 from "./assets/img4.jpg"
// import video from "./assets/video.mp4"
import ConsoleAnimation from './pages/ConsoleAnimation';
import ProductList from './pages/ProductList';
import Validation from './pages/Validation';




const App = () => {

  const user = true
  return (
    <div className='Container'   >
     
    <Router  >
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product/">
          <Product/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route  path="/cart">
          <Cart/>
        </Route>
        <Route  path="/animate">
          <ConsoleAnimation/>
        </Route>
        <Route  path="/productList">
          <ProductList/>
        </Route>
        <Route  path="/validation">
          <Validation/>
        </Route>
      </Switch>
    </Router>
    </div>
  )
    
};

export default App;