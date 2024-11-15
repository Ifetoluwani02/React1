import React from 'react';
import product from './product';

function Image() {
  return <img src={product.image} alt={product.name} className="card-img-top" />;
}

export default Image;
