import {Product} from "../store/products/types"

export const getProductsFromBackend = async (): Promise<Product[]> => {
  return [
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
}