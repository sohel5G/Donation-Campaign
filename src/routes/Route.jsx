
import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Statistics from "../pages/statistics/Statistics";
import DonationDetails from "../pages/home/DonationDetails";
import Donationeds from "../pages/donationed/Donationeds";


const myRouter = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Layout></Layout>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loading: () => fetch('/jobs.json')
            },
            {
                path: '/donationed',
                element: <Donationeds></Donationeds>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donation/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/donations.json')
            }
        ]
    }
]);

export default myRouter;