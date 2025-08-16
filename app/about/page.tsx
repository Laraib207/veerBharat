import Navbar from '../components/Navnar'
import Footer from '../components/Footer'

const products = [
  {
    name: "Fortune Sunflower Oil",
    image: "https://www.fortunefoods.com/images/oil/FortuneSunliteRefinedSunflowerOil.png",
    description: "Pure, light and healthy sunflower oil for everyday cooking. Trusted by families for its quality and taste.",
  },
  {
    name: "Patanjali Mustard Oil",
    image: "https://www.patanjaliayurved.net/assets/product_images/large/Mustard-Oil-1ltr.png",
    description: "Traditional cold-pressed mustard oil, perfect for Indian recipes. Adds authentic flavor and aroma.",
  },
  {
    name: "Saffola Gold Oil",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/8/336280323/YE/HA/HP/13335273/saffola-gold-oil-500x500.png",
    description: "Blended edible oil for a healthy heart. Ideal for frying and sautéing with a light taste.",
  },
  {
    name: "Organic Basmati Rice",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    description: "Premium long-grain basmati rice, organically grown for the best aroma and taste.",
  },
  {
    name: "Fresh Green Peas",
    image: "https://images.unsplash.com/photo-1464306076886-debede6bbf94",
    description: "Farm-fresh green peas, sweet and tender. Perfect for curries, salads, and snacks.",
  },
  {
    name: "Amul Pure Ghee",
    image: "https://www.bigbasket.com/media/uploads/p/xxl/40001643_2-amul-pure-ghee.jpg",
    description: "Rich and aromatic pure ghee from Amul. Adds flavor and nutrition to every meal.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
        padding: '3rem 0 2rem 0',
        textAlign: 'center',
        minHeight: '60vh'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1e40af',
          marginBottom: '1rem',
          letterSpacing: '2px'
        }}>
          About Veer Bharat Grocery
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#444',
          marginBottom: '2.5rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          We are a trusted grocery company, delivering fresh groceries, premium oils, and daily essentials to your doorstep. Our mission is to bring quality, health, and happiness to every home.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2.5rem',
          marginTop: '2rem'
        }}>
          {products.map((product, idx) => (
            <div key={idx} style={{
              background: 'white',
              borderRadius: '24px',
              boxShadow: '0 4px 24px rgba(30,64,175,0.10)',
              padding: '2rem 1.5rem 1.5rem 1.5rem',
              maxWidth: '220px',
              textAlign: 'center',
              transition: 'transform 0.3s',
              cursor: 'pointer',
              animation: `fadeIn 0.8s ${idx * 0.15}s both`
            }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  marginBottom: '1rem',
                  boxShadow: '0 2px 12px rgba(124,48,237,0.10)'
                }}
              />
              <div style={{
                fontWeight: 'bold',
                fontSize: '1.1rem',
                color: '#7c3aed',
                marginBottom: '0.5rem'
              }}>
                {product.name}
              </div>
              <div style={{
                color: '#444',
                fontSize: '0.98rem',
                marginBottom: '0.5rem'
              }}>
                {product.description}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.8);}
            to { opacity: 1; transform: scale(1);}
          }
          div:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 32px rgba(124,48,237,0.18);
          }
        `}</style>
      </section>
      <Footer />
    </main>
  );
}