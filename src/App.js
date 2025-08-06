import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Error } from "./components/Error.js";
import CJFooter from "./components/CJFooter.js";
import useUserOnlineStatus from "./utils/useUserOnlineStatus.js";
import InternetErrorHandler from "./components/InternetErrorHandler.js";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading.js";

const About = lazy(() => import("./components/About.js"))
const Contact = lazy(() => import("./components/Contact.js"))
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.js")) 



const App = () => {
  const status = useUserOnlineStatus()
  console.log(status);
  
  if (status === "offline") {
    return <InternetErrorHandler />
  }
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <CJFooter />
    </div>

  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "",
      element: <Body />
    }, {
      path: "about",
      element: <Suspense><About /></Suspense>
    },
    {
      path: "/contact",
      element: <Suspense><Contact /></Suspense>
    },
    {
      path: "/restaurant/:resId",
      element: <Suspense fallback={<Loading />}><RestaurantMenu /></Suspense>
    }
    ],
    errorElement: <Error />
  }
  // {
  //   path: "/cart",
  //   element: <Cart />
  // }
])

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={appRouter} />)



