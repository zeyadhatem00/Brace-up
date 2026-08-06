import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/Productdetail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Layout from "./components/layout/Layout";

export function ScrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:slug", element: <ProductDetail /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
