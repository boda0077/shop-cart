// RouteProvider.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from './components/CartContext';  // Import CartProvider
import App from './App.jsx';
import ShopMenu from "./components/ShopMenu.jsx";
import ItemPage from './components/Item.jsx';
import Layout from './components/Layout.jsx';
import CartPage from "./components/CartPage.jsx";
import Nav from "./components/Nav.jsx";
import AboutPage from "./components/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'shop',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <ShopMenu />,
      },
      {
        path: 'item/:id',
        element: <ItemPage />,
      },
    ],
  }, {
    path: 'cart',
    element: <>
    <Nav />
      <CartPage />
    </>,  // Add CartPage route
  }, {
    path: 'about',
    element: <>
      <Nav />
      <AboutPage />
    </>,  // Add AboutPage route
  },
]);

export default function RouteProvider() {
  return (
    // Wrap RouterProvider with CartProvider
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
