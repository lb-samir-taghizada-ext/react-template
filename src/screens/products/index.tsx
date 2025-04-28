import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {isLoadingProductsSelector, productsListSelector} from "../../store/products/selectors"
import {useEffect} from "react"
import {getProductsListThunk} from "../../store/products"

export const ProductsScreen = () => {
  const products = useSelector(productsListSelector);
  const isLoading = useSelector(isLoadingProductsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsListThunk())
  }, [])

  return (
    <div>
      <h4>Products screen</h4>
      <div>
        {isLoading ? <p>Loading</p> : 
          products.map(product => (
            <div key={product.id}>
              <p>{product.name}</p>
              <Link to={`/products/${product.id}`}>Check</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}