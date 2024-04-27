import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsPage from "./ProductsPage";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // Set the fetched products data to the state
        setProducts(response.data.products);
        setLoading(false);
        console.log(response)
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>Product List</h1>
      <p>Total products: {products.length}</p>
      <ul>
        {products.map((product) => {
          return (
            <>
              <ProductsPage
                key={product.id}
                productName={product.title}
                productPrice={product.price}
                productDescriptions={product.descriptions}
                productImages={product.images[0]} />
             
            </>
          );
        })}
      </ul>
    </div>
  );
}
export default ProductList;
