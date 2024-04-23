import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList.js';
import Footer from './Components/Footer.js';


function App() {
  const products=[
      {
        price:100000,
        name1:"IPhone 14 Pro Max",
        quantity:999999,
      },
      {
        price:1100000,
        name1:"IPhone 17 Pro Max X",
        quantity:1999999,
      }


  ];
  return (
    <>
    <Navbar></Navbar>
    <ProductList products={products} />
    {/* <Footer/> */}
    
    
    
    
    
    </>
  );
}

export default App;
