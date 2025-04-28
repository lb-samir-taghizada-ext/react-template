import {useParams} from "react-router-dom"

export const DetailsScreen = () => {
  const params = useParams();
  const productId = params.productId ?? '1'

  return (
    <div>
      <h4>Details screen for product with id {productId}</h4>
    </div>
  )
}