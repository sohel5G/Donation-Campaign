import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const { status, statusText } = useRouteError();

    return (
        <div className="min-h-screen flex justify-center items-center text-center">
            <div>
                <h1 className="text-7xl">{status}</h1>
                <h1 className="text-5xl py-8 mb-7">{statusText}</h1>
                <Link className="bg-[#FF444A] py-3 px-5 text-white rounded-md" to={'/'}>Go To Home Page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;