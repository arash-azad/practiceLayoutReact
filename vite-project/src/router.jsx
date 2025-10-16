import { createBrowserRouter } from "react-router-dom";
import Myhome from "./Home";
import Layout from "./Layout";
import Cards from "./RecipeReviewCard";
import Header from './Header';
import Footer from './Footer';
import SingleProductPage from "./SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Myhome />,
      },
    ],
  },
    {
        path: "shop",
        element: <Layout />,
        children:[
            {
            index: true,
            element: <Cards />,
            }
        ]
      },
    {
        path: "/products/:myID",
        element: <Layout />,
        children:[
            {
            index: true,
            element: <SingleProductPage />,
            }
        ]
      },
]);

export default router;
