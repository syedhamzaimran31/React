import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./Components/ProductsPage";
import Navbar from "./Components/Navbar";
import ProductImage from "./assets/images/Product_1.jpeg";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ProductList />

    </>
  );
}

export default App;
