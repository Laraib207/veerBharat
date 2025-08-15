import Navnar from '../components/Navnar'
import ProductsGrid from '../components/ProductsGrid'
import Footer from '../components/Footer'

export default function ProductsPage() {
  return (
    <main>
      <Navnar />
      <h2 style={{ textAlign: 'center', margin: '2rem 0', fontSize: '2rem', color: '#1e40af' }}>
        Our Products
      </h2>
      <ProductsGrid />
      <Footer />
    </main>
  )
}