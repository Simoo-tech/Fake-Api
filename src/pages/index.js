import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function index({ products }) {
  console.log(products);

  return (
    <>
      <Head>
        <title>Fake api store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={styles.title}>Fake Api Store</h2>
      <div className="container">
        <div className="row">
          {products.map((data) => {
            return (
              <>
                <div className={`col-12 col-md-6 col-lg-4  ${styles.product}`}>
                  <img src={data.image} alt={data.title} />
                  <h5>{data.title}</h5>
                  <p>{data.desciption}</p>
                  <p>${data.price}</p>
                  <Link href={`/product/${data.id}`}>Buy</Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: { products },
  };
}
