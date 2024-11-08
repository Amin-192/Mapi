// app/products/[productId]/page.tsx

import React from 'react';
import products from '../products'; // Make sure this path is correct

const ProductPage = ({ params }) => {
  const { productId } = params; // Extracting the product ID from the URL

  // Find the product by its ID
  const product = products.find((p) => p.id === productId); 

  // Check if the product exists
  if (!product) {
    return <div>Product not found</div>; // Show this if the product ID doesn't match
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;