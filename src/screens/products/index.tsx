import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {isLoadingProductsSelector, productsListSelector} from "../../store/products/selectors"
import {useEffect} from "react"
import {getProductsListThunk, useGetRandomFactQuery} from "../../store/products/slice"
import {RootState} from "../../store"

export const ProductsScreen = () => {
  const facts = useSelector(productsListSelector);
  const isLoading = useSelector(isLoadingProductsSelector);
  const error = useSelector((state: RootState) => state.products.error)
  const dispatch = useDispatch();
  const {data} = useGetRandomFactQuery()

  // const getRandomFact = () => {
  //   dispatch(getProductsListThunk())
  // }
  console.log('data :>> ', data);

  return (
    <div>
      <h4>Products screen</h4>
      {/* <button onClick={getRandomFact}>Get fact</button> */}
      <div>
        <p>Error: {error}</p>
        {/* {isLoading ? <p>Loading</p> : 
          facts.map((fact, index) => (
            <div key={fact.id}>
              <span>{index + 1}. </span>
              <span>{fact.text}</span>
            </div>
          ))
        } */}
      </div>
    </div>
  )
}