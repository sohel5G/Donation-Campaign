
import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Donation from "../pages/donation/Donation";
import Statistics from "../pages/statistics/Statistics";


const myRouter = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Layout></Layout>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
]);

export default myRouter;