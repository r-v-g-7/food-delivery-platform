import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import { About } from "./components/About";


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
  // {
  //   path: "/about",
  //   element: <About />
  // }
  // {
  //   path: "/contactUs",
  //   element: <ContactUs />
  // }, 
  // {
  //   path: "/cart",
  //   element: <Cart />
  // }
])

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);



