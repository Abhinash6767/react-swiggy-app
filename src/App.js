import React from "react";
import ReactDOM from "react-dom/client";
// import { cards } from "../data.json";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";

// const resData = cards;

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/about',
        element: <About/>,
      },
      {
        path:'/contact',
        element: <Contact/>,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
