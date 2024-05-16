import { AddToCartButton } from './add-to-cart-button'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://api.github.com/users/hiurimendes')
  const user = await response.json()

  const [productId, size, color] = params.data

  return (
    <h1>
      <div>Product: {productId}</div>
      <div>Size: {size}</div>
      <div>Color: {color}</div>

      <AddToCartButton />
    </h1>
  )
}
