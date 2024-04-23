import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProductPage = ({key, productName, productPrice, productDescriptions,productImages }) => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedQty, setSelectedQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(productPrice * selectedQty);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    let newPrice = productPrice; 

    // Adjust the price based on the selected size
    if (e.target.value === "S") {
      newPrice += 10;
    } else if (e.target.value === "M") {
      newPrice += 15;
    } else if (e.target.value === "L") {
      newPrice += 20;
    }

    setSelectedQty(1); // Reset quantity to 1 when changing size
    setTotalPrice(newPrice); // Set the new total price
  };

  const handleQtyChange = (e) => {
    setSelectedQty(e.target.value);
  };
  useEffect(() => {
    let newPrice = productPrice; // Initialize new price with base price

    // Adjust the price based on the selected size
    if (selectedSize === "S") {
      newPrice += 10;
    } else if (selectedSize === "M") {
      newPrice += 15;
    } else if (selectedSize === "L") {
      newPrice += 20;
    }

    setTotalPrice(newPrice * selectedQty); // Set the new total price
  }, [productPrice, selectedSize, selectedQty]);

  
  return (
    <div className="product-page">
      <div className="product-image-container">
        <img src={productImages} alt="Product Image" />
      </div>
      <div className="product-details">
        <h1>{productName}</h1>
        <p>Price: ${totalPrice}</p> {/* Display total price */}
        <label htmlFor="size-select">Size:</label>
        <select
          id="size-select"
          value={selectedSize}
          onChange={handleSizeChange}
        >
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
        <label htmlFor="qty-select">Quantity:</label>
        <select
          id="qty-select"
          value={selectedQty}
          onChange={handleQtyChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p>Total Price: ${totalPrice}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default ProductPage;
