import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {RootScreen} from "../screens/root"
import {ErrorScreen} from "../screens/error"
import {HomeScreen} from "../screens/home";
import {ProductsScreen} from "../screens/products";
import {ProfileScreen} from "../screens/profile";
import {DetailsScreen} from "../screens/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootScreen />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "home",
        element: <HomeScreen />
      },
      {
        path: "products",
        element: <ProductsScreen />,
      },
      {
        path: "profile",
        element: <ProfileScreen />
      },
      {
        path: "products/:productId",
        element: <DetailsScreen />
      }
    ]
  },
]);

export const RootNavigation = () => {
  return (
    <RouterProvider router={router} />
  )
}