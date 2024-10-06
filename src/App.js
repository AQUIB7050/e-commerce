import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';
import HomePage from './customer/pages/HomePage';

function App() {
  return (
    <div className="">
     <Navigation/>
     <div>
      {/* <HomePage/> */}
      <Product/>
     </div>
     <div>
      <Footer/>
     </div>
     
    </div>
  );
}

export default App;
