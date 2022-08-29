import React from 'react'
import styles from './style';
import { Navbar, Billing, Business, CardDeals, Client, CTA, Footer, Hero, Stats, Testimonials } from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      {/* navbar section */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* hero section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeals />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App