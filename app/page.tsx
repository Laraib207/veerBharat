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

export default function HomePage() {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#1e40af',
            marginBottom: '0.5rem',
            animation: 'fadeInDown 1s'
          }}
        >
          🛒 Welcome to Veer Bharat Grocery!
        </h1>
        <p
          style={{
            fontSize: '1.3rem',
            color: '#444',
            marginBottom: '2rem',
            animation: 'fadeInUp 1.3s'
          }}
        >
          Fresh groceries, best prices, and top brands delivered to your door.
        </p>
        {/* Animated Grocery Brands */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}
        >
          {/* Example Oil Brands */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(30,64,175,0.10)',
            padding: '1.5rem 1.2rem',
            textAlign: 'center',
            minWidth: '140px',
            animation: 'float 2s infinite alternate'
          }}>
            <img
              src="https://www.fortunefoods.com/images/oil/FortuneSunliteRefinedSunflowerOil.png"
              alt="Fortune Oil"
              style={{ width: '60px', height: '60px', objectFit: 'contain', marginBottom: '0.5rem' }}
            />
            <div style={{ fontWeight: 'bold', color: '#dc2626' }}>Fortune Oil</div>
          </div>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(30,64,175,0.10)',
            padding: '1.5rem 1.2rem',
            textAlign: 'center',
            minWidth: '140px',
            animation: 'float 2s 0.2s infinite alternate'
          }}>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/8/336280323/YE/HA/HP/13335273/saffola-gold-oil-500x500.png"
              alt="Saffola Oil"
              style={{ width: '60px', height: '60px', objectFit: 'contain', marginBottom: '0.5rem' }}
            />
            <div style={{ fontWeight: 'bold', color: '#f59e42' }}>Saffola Gold</div>
          </div>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 16px rgba(30,64,175,0.10)',
            padding: '1.5rem 1.2rem',
            textAlign: 'center',
            minWidth: '140px',
            animation: 'float 2s 0.4s infinite alternate'
          }}>
            <img
              src="https://www.patanjaliayurved.net/assets/product_images/large/Mustard-Oil-1ltr.png"
              alt="Patanjali Mustard Oil"
              style={{ width: '60px', height: '60px', objectFit: 'contain', marginBottom: '0.5rem' }}
            />
            <div style={{ fontWeight: 'bold', color: '#1e40af' }}>Patanjali Mustard</div>
          </div>
        </div>
        {/* Animated SVG or Emoji */}
        <div style={{
          fontSize: '2.5rem',
          animation: 'bounce 1.5s infinite'
        }}>
          🥦 🍅 🥛 🧅 🥬
        </div>
        {/* Inline CSS for animation */}
        <style>{`
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes float {
            from { transform: translateY(0);}
            to { transform: translateY(-18px);}
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-18px);}
          }
        `}</style>
      </section>
      {/* Info Section */}
      <section style={{
        background: '#fff',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 2px 16px rgba(30,64,175,0.08)'
      }}>
        <h2 style={{ color: '#7c3aed', fontWeight: 'bold', fontSize: '1.7rem' }}>
          Why Shop With Us?
        </h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1.5rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            background: '#f0f9ff',
            borderRadius: '12px',
            padding: '1.5rem',
            minWidth: '220px',
            boxShadow: '0 2px 8px rgba(30,64,175,0.05)'
          }}>
            <span style={{ fontSize: '2rem' }}>🚚</span>
            <div style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Fast Delivery</div>
            <div style={{ color: '#444', marginTop: '0.5rem' }}>Get your groceries delivered in hours, not days!</div>
          </div>
          <div style={{
            background: '#f0f9ff',
            borderRadius: '12px',
            padding: '1.5rem',
            minWidth: '220px',
            boxShadow: '0 2px 8px rgba(30,64,175,0.05)'
          }}>
            <span style={{ fontSize: '2rem' }}>🥗</span>
            <div style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Fresh Products</div>
            <div style={{ color: '#444', marginTop: '0.5rem' }}>Highest quality and freshness guaranteed.</div>
          </div>
          <div style={{
            background: '#f0f9ff',
            borderRadius: '12px',
            padding: '1.5rem',
            minWidth: '220px',
            boxShadow: '0 2px 8px rgba(30,64,175,0.05)'
          }}>
            <span style={{ fontSize: '2rem' }}>💸</span>
            <div style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Best Prices</div>
            <div style={{ color: '#444', marginTop: '0.5rem' }}>Save more on every order with exclusive deals.</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}



