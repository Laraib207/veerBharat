// import React from 'react'
// import Navbar from './components/Navnar'
// import ProductsGrid from './components/ProductsGrid'




// const page = () => {
//   return (
//     <main>
//       <Navbar />
//       <ProductsGrid />
//   </main>
      
//   )
// }

// export default page


import Navbar from './components/Navnar'
import Footer from './components/Footer'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          🛒 Welcome to Veer Bharat Grocery!
        </h1>
        <p className="hero-desc">
          Fresh groceries, best prices, and top brands delivered to your door.
        </p>
        {/* Animated Grocery Brands */}
        <div className="brand-row">
          <div className="brand-card" style={{ animationDelay: '0s', contain: 'content' }}>
            <Image
              src="https://www.fortunefoods.com/images/oil/FortuneSunliteRefinedSunflowerOil.png"
              alt="Fortune Oil"
              width={50}
              height={50}
              sizes="50px"
            />
            <div className="brand-name" style={{ color: '#dc2626' }}>Fortune Oil</div>
          </div>
          <div className="brand-card" style={{ animationDelay: '0.2s', contain: 'content' }}>
            <Image
              src="https://5.imimg.com/data5/SELLER/Default/2023/8/336280323/YE/HA/HP/13335273/saffola-gold-oil-500x500.png"
              alt="Saffola Oil"
              width={50}
              height={50}
              sizes="50px"
            />
            <div className="brand-name" style={{ color: '#f59e42' }}>Saffola Gold</div>
          </div>
          <div className="brand-card" style={{ animationDelay: '0.4s', contain: 'content' }}>
            <Image
              src="https://www.patanjaliayurved.net/assets/product_images/large/Mustard-Oil-1ltr.png"
              alt="Patanjali Mustard Oil"
              width={50}
              height={50}
              sizes="50px"
            />
            <div className="brand-name" style={{ color: '#1e40af' }}>Patanjali Mustard</div>
          </div>
        </div>
        <div className="emoji-row">
          🥦 🍅 🥛 🧅 🥬
        </div>
      </section>
      {/* Info Section */}
      <section className="info-section">
        <h2 className="info-title">
          Why Shop With Us?
        </h2>
        <div className="info-row">
          <div className="info-card">
            <span>🚚</span>
            <div className="info-name">Fast Delivery</div>
            <div className="info-desc">Get your groceries delivered in hours, not days!</div>
          </div>
          <div className="info-card">
            <span>🥗</span>
            <div className="info-name">Fresh Products</div>
            <div className="info-desc">Highest quality and freshness guaranteed.</div>
          </div>
          <div className="info-card">
            <span>💸</span>
            <div className="info-name">Best Prices</div>
            <div className="info-desc">Save more on every order with exclusive deals.</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}