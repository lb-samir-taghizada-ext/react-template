import {Link} from "react-router-dom"

const products = [
  {
    id: 1,
    name: "Product #1",
  },
  {
    id: 2,
    name: "Product #2",
  },
  {
    id: 3,
    name: "Product #3",
  },
]

export const ProductsScreen = () => {
  return (
    <div>
      <h4>Products screen</h4>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
            <Link to={`/products/${product.id}`}>Check</Link>
          </div>
        ))}
      </div>
    </div>
  )
}