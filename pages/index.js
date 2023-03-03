import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <h1 className={styles.title}>home</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic
        pariatur consequatur quasi unde voluptate libero necessitatibus quia
        veritatis quae nostrum voluptates similique accusamus blanditiis,
        placeat incidunt reiciendis id. Minima.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic
        pariatur consequatur quasi unde voluptate libero necessitatibus quia
        veritatis quae nostrum voluptates similique accusamus blanditiis,
        placeat incidunt reiciendis id. Minima.
      </p>
      <Link href="cart" className={styles.btn}>
        cart
      </Link>
    </div>
  );
}
