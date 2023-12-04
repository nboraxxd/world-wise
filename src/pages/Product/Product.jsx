import styles from './Product.module.css'

export default function Product() {
  return (
    <section className={styles.main}>
      <img src="/images/img-1.jpg" alt="person with dog overlooking mountain with sunset" className={styles.image} />
      <div>
        <h1 className={styles.title}>About WorldWide.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est dicta illum vero culpa cum quaerat
          architecto sapiente eius non soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
          perspiciatis?
        </p>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus libero sunt expedita ratione
          iusto, magni, id sapiente sequi officiis et.
        </p>
      </div>
    </section>
  )
}
