import Link from "next/link";
import fetchData from "../../server/fetchData";
import styles from "../../styles/Cart.module.css";

export const getStaticProps = async () => {
  const data = await fetchData();
  return {
    props: {
      items: data,
    },
  };
};

const Cart = ({ items }) => {
  return (
    <div className="cart-page">
      <h1>cart</h1>
      {items.map((item, i) => (
        <Link href={`cart/${item.id}`} className={styles.single} key={i}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Cart;
