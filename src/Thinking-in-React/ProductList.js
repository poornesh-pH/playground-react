import React from 'react';

export default function ProductList(props) {
  console.log(props.products);
  return (
    <div>
      <h6>Shopping Goods</h6>
      {/* <ul class="collection">
        {props.products.map(product => {
          <li class="collection-item">
            {product.name}
            <div className="secondary-content">{product.price}</div>
          </li>;
        })}
      </ul> */}
{props.products.map((product)=>{
  return(

)

})}
      {/* <h6>Electronics</h6>
      <ul class="collection">
        <li class="collection-item">
          Alwin<div className="secondary-content">50</div>
        </li>
      </ul> */}
    </div>
  );
}
