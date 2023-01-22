import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import HeaderComponent from "./components/Header";
import Fotter from "./components/Footer";
import Body from './components/Body';
import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import About from './components/About';
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = function(){
    return(
        <>
        <HeaderComponent/>
        <Outlet/>
        <Fotter/>
        </>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu/>
      },
    ],
  },
  
])




// const RestaurantList = function(){
//     return(
//         <div className="card">
//             <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhup2ew1evf3espl5fgs"/>
//             <h2>Burger King</h2>
//             <h3>Burgers, American</h3>
//             <h4>4.2 stars</h4>
//         </div>
//     )
// }







const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
