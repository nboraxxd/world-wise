// Uses the same styles as Product
import styles from '@/pages/Product/Product.module.css'

export default function Pricing() {
  return (
    <section className={styles.main}>
      <div>
        <h1 className={styles.title}>
          Simple pricing.
          <br />
          Just $9/month.
        </h1>
        <p className={styles.desc}>Perfect for occasional travelers who want to keep track of their adventures.</p>
      </div>
      <img src="/images/img-2.webp" alt="overview of a large city with skyscrapers" className={styles.image} />
    </section>
  )
}
