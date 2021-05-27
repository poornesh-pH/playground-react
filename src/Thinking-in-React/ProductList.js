import React from 'react';

export default function ProductList(props) {
  console.log(props.products);
  return (
    <div>
      <h6>Shopping Goods</h6>
      <ul class="collection">
        {props.products.map(product => {
          if ((props.available && product.stocked)) {
            if (product.category == 'Sporting Goods') {
              return (
                <div>
                  <li class="collection-item">
                    {product.name}
                    <div className="secondary-content">{product.price}</div>
                  </li>
                </div>
              );
            }
          }
        })}
      </ul>
      <h6>Electronics</h6>
      <ul class="collection">
        {props.products.map(product => {
          if (product.category == 'Electronics') {
            return (
              <div>
                <li class="collection-item">
                  {product.name}
                  <div className="secondary-content">{product.price}</div>
                </li>
              </div>
            );
          }
        })}
      </ul>
    </div>
  );
}
