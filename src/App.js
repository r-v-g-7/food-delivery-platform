import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";
import { Error } from "./components/Error.js";
import { RestaurantMenu } from "./components/RestaurantMenu.js";


const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
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
    },{
      path: "about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    }, 
    {
      path: "/restaurant", 
      element: <RestaurantMenu />
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



