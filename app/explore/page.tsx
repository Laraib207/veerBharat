import Navbar from '../components/Navnar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function ExplorePage() {
  const buds = [
    {
      name: 'Clove Buds',
      image: 'https://images.unsplash.com/photo-1601000938259-d2b21b7c84e8',
      description: 'Aromatic clove buds for rich flavors and wellness teas.'
    },
    {
      name: 'Rose Buds (Edible)',
      image: 'https://images.unsplash.com/photo-1519680772-8b3a0fd5e1a1',
      description: 'Dried rose buds for desserts, garnishing, and herbal infusions.'
    },
    {
      name: 'Tea Buds (Premium Tips)',
      image: 'https://images.unsplash.com/photo-1508002366005-75a695ee2d17',
      description: 'Handpicked young tea buds delivering delicate aroma and taste.'
    }
  ]

  const categories = [
    { name: 'Oils', emoji: '🛢️', href: '/about' },
    { name: 'Fresh Produce', emoji: '🥦', href: '/products' },
    { name: 'Spices', emoji: '🌶️', href: '/products' },
    { name: 'Buds', emoji: '🌸', href: '#buds' }
  ]

  return (
    <main>
      <Navbar />
      <section style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
        padding: '3rem 0 2rem 0',
        textAlign: 'center',
        minHeight: '50vh'
      }}>
        <h1 style={{
          fontSize: '2.4rem',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '0.5rem'
        }}>
          Explore
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#444',
          maxWidth: '640px',
          margin: '0.5rem auto 2rem auto'
        }}>
          Discover curated categories and specialty items from Veer Bharat Grocery.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href} style={{
              background: 'white',
              borderRadius: '9999px',
              padding: '0.65rem 1.1rem',
              boxShadow: '0 2px 10px rgba(30,64,175,0.10)',
              color: '#1e40af',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              <span style={{ marginRight: '0.4rem' }}>{cat.emoji}</span>
              {cat.name}
            </Link>
          ))}
        </div>

        <div id="buds" style={{
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <h2 style={{
            color: '#7c3aed',
            fontSize: '1.8rem',
            fontWeight: 'bold',
            margin: '1rem 0 1rem 0'
          }}>
            Buds Collection
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            {buds.map((item, idx) => (
              <div key={idx} style={{
                background: 'white',
                borderRadius: '18px',
                boxShadow: '0 4px 18px rgba(124,58,237,0.10)',
                padding: '1rem',
                width: '300px',
                transition: 'transform 0.2s'
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginBottom: '0.75rem'
                  }}
                />
                <div style={{ fontWeight: 'bold', color: '#1e40af', marginBottom: '0.25rem' }}>{item.name}</div>
                <div style={{ color: '#444', fontSize: '0.98rem' }}>{item.description}</div>
                <button style={{
                  marginTop: '0.8rem',
                  padding: '0.5rem 1rem',
                  background: 'linear-gradient(90deg, #1e40af 0%, #7c3aed 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 600
                }}>
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

