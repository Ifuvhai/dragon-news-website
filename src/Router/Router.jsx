
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import Root from "../Layouts/RootLayout/Root";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/public/news.json')
            }
        ]
    }
])

export default Router;