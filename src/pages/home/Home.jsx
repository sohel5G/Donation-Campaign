import { useState } from "react";
import Banner from "./Banner";
import Donations from "./donations";



const Home = () => {
    const [searchValue, setSearchValue] = useState('')
    const getSearchValue = searchValue => {
        if (searchValue){
            setSearchValue(searchValue)
        }
    }

    return (
        <>
            <Banner getSearchValue={getSearchValue}></Banner>
            <section>
                <Donations searchValue={searchValue}></Donations>
            </section>
        </>
    );
};

export default Home;

