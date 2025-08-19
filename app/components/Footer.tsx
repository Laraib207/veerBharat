export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      position: 'sticky',
      left: 0,
      bottom: 0,
      background: 'linear-gradient(90deg, #1e40af 0%, #7c3aed 50%, #dc2626 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '1rem 0',
      fontWeight: '500',
      fontSize: '1rem',
      letterSpacing: '1px',
      boxShadow: '0 -2px 16px rgba(0,0,0,0.12)',
      zIndex: 100
    }}>
      <span style={{
        background: 'rgba(255,255,255,0.08)',
        padding: '0.5rem 1.5rem',
        borderRadius: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        display: 'inline-block'
      }}>
        © {new Date().getFullYear()} Veer Bharat. All rights reserved. 🚀
      </span>
    </footer>
  );
}