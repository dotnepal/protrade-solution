import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div>
      <h1>Product: {slug}</h1>
      <p>Details for {slug} flooring product.</p>
    </div>
  )
}
