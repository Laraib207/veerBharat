type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

import Image from 'next/image'

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Apples",
    price: "₹120/kg",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    description: "Crisp and juicy apples, perfect for snacking.",
  },
  {
    id: 2,
    name: "Organic Milk",
    price: "₹60/litre",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
    description: "Pure organic milk from local farms.",
  },
  {
    id: 3,
    name: "Green Spinach",
    price: "₹40/bunch",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    description: "Fresh spinach leaves, full of nutrients.",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      padding: '1rem',
      textAlign: 'center',
      margin: '0.5rem',
      width: '220px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Image
        src={product.image}
        alt={product.name}
        width={220}
        height={120}
        sizes="(max-width: 600px) 100vw, 220px"
        style={{
          width: '100%',
          height: '120px',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '1rem'
        }}
      />
      <h3 style={{ margin: '0.5rem 0', fontWeight: 'bold', color: '#1e40af' }}>{product.name}</h3>
      <p style={{ margin: '0.5rem 0', color: '#444', fontSize: '0.95rem' }}>{product.description}</p>
      <div style={{
        marginTop: '0.5rem',
        fontWeight: 'bold',
        color: '#dc2626',
        fontSize: '1.1rem'
      }}>{product.price}</div>
      <button style={{
        marginTop: '1rem',
        padding: '0.5rem 1.2rem',
        background: 'linear-gradient(90deg, #1e40af 0%, #7c3aed 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '500'
      }}>
        Add to Cart
      </button>
    </div>
  );
}

export default function ProductsGrid() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      padding: '2rem 0'
    }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}