import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./components/About.js";
import { Contact } from "./components/Contact.js";


const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }, 
  // {
  //   path: "/cart",
  //   element: <Cart />
  // }
])

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={appRouter}/>)



