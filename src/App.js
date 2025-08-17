import "./index.css";
import "./main.css";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Error } from "./components/Error.js";
import CJFooter from "./components/CJFooter.js";
import useUserOnlineStatus from "./utils/useUserOnlineStatus.js";
import InternetErrorHandler from "./components/InternetErrorHandler.js";
import { lazy, Suspense, useEffect, useState } from "react";
import { createContext } from "react";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore.js";

const About = lazy(() => import("./components/About.js"))
const Contact = lazy(() => import("./components/Contact.js"))
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.js"))
const Profile = lazy(() => import("./components/Profile.js"))

export const ProfileDataContext = createContext()


const App = () => {
  const status = useUserOnlineStatus()
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    fetchProfileData()
  }, [])

  const fetchProfileData = async () => {
    const data = await fetch("https://api.github.com/users/r-v-g-7")
    const json = await data.json()
    setProfileData(json)
  }

  if (status === "offline") {
    return <InternetErrorHandler />
  }
  return (
    <Provider store={appStore}>
      <ProfileDataContext.Provider value={{ profileData, setProfileData }}>
        <div className="app-container">
          <Header />
          <Outlet />
          <CJFooter />
        </div>
      </ProfileDataContext.Provider>
    </Provider>

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
      element: <Suspense fallback={<h1>Loading.....</h1>}><About /></Suspense>
    },
    {
      path: "/contact",
      element: <Suspense fallback={<h1>Loading.....</h1>}><Contact /></Suspense>
    },
    {
      path: "/restaurant/:resId",
      element: <Suspense fallback={<h1>Loading.....</h1>}><RestaurantMenu /></Suspense>
    },
    {
      path: "/profile",
      element: <Suspense fallback={<h1>Loading........</h1>}><Profile /></Suspense>
    }
    ],
    errorElement: <Error />
  }
])

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={appRouter} />)



