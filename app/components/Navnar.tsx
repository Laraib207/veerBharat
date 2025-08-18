import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #dc2626 100%)',
      color: 'white',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img
          src="/logo.png"
          alt="Veer Bharat Logo"
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'contain',
            borderRadius: '8px'
          }}
        />
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Veer Bharat</span>
      </div>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
        <Link href="/explore" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Explore</Link>
        <Link href="/products" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Products</Link>
        <Link href="/about" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>About</Link>  
        <Link href="/contact" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
      </div>
    </nav>
  );
}