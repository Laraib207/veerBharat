'use client';
import dynamic from 'next/dynamic'

const ProductsGrid = dynamic(() => import('../components/ProductsGrid'), {
  loading: () => <div style={{ textAlign: 'center', padding: '2rem' }}>Loading products…</div>,
  ssr: false
})

export default ProductsGrid

