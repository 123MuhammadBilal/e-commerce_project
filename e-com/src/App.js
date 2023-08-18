import './css/style.css';
import { Navigation } from './common/Navigation';
import { Footer } from './common/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Login } from './components/Login';
const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: "<Home />",
        },
        {
          path: "products",
          element: "<products />",
        },
        {
          path: "contact",
          element: "<contact />",
        },
        {
          path: "about",
          element: "<about />",
        },
        {
          path: "profile",
          element: <Login />,
        },
        {
          path: "*",
          element: (
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#e07a5f",
                fontSize: "66px",
                textAlign: "center",
              }}
            >
              404<br></br>Page Not Found
            </h1>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
