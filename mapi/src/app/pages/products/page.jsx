// app/products/page.tsx

import React from 'react';
import Link from 'next/link';
import products from './products'; // Make sure this path is correct

const ProductsList = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/pages/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;