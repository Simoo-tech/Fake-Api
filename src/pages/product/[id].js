import React from "react";
import style from "../../styles/product.module.css";
export default function Product({ data }) {
  const { title, image, price } = data;
  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className={`col-6 ${style.image}`}>
            <img src={data.image} alt={data.title} />
          </div>
          <div className="col-6">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <span>${data.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const data = await res.json();
  return { props: { data } };
}
