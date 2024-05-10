import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className="section_hero">
        <h1>Sorvete Artesanal</h1>
      </section>
      <section>
        <div>
          <Image src={''} />
        </div>
        <div>
          <h2>Nossos Sabores</h2>
          <span></span>
          <p></p>
        </div>
      </section>
      <section>
        <div>
          <h2>Nossos Sabores</h2>
          <span></span>
          <p></p>
        </div>
        <div>
          <Image src={''} />
        </div>
      </section>
      <section>
        <div>
          <Image src={''} />
        </div>
        <div>
          <h2>Nossos Sabores</h2>
          <span></span>
          <p></p>
        </div>
      </section>
    </main>
  );
}
