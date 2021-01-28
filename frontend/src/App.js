
import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Screen
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'


//Components
import Navbar from './components/Navbar'
import Sidedrawer from './components/Sidedrawer'
import Backdrop from './components/Backdrop';

function App() {

  const [sideToggle,setSideToggle]=useState(false)
  return (
    <Router>

      <Navbar click={()=>setSideToggle(true)} />
      <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
      <main>
        <switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart' component={CartScreen} />
        </switch>
      </main>

    </Router>
  );
}

export default App;
