import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/addproduct">Add products</Link>
      <Link href="/products">Product list</Link>
    </main>
  );
}
