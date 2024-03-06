import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Hero from './components/Hero';
import Menus from './components/Menus';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Routes>
        <Route path='/' element={  <Menus/>} />
        <Route path='/checkout' element={<Checkout/>}  />
       </Routes>
      
    

      
    </div>
  );
}

export default App;
