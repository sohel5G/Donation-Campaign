import { useEffect, useState } from "react";
import Donation from "./Donation";
import PropTypes from 'prop-types';

const Donations = ({ searchValue }) => {
    const [donations, setDonation] = useState([]);
    const [searchDonations, setSearchDonations] = useState([]);
    const searchValueLowerCase = searchValue.trim().toLowerCase();

   useEffect(()=>{
       if (searchValueLowerCase){
           const filterdCategories = donations.filter(donation => donation.category.toLowerCase().includes(searchValueLowerCase));
           setSearchDonations(filterdCategories);
       } else {
           setSearchDonations(donations);
       }

   }, [searchValue, donations, searchValueLowerCase])

    useEffect(() => {
        fetch('/donations.json')
            .then(res => res.json() )
            .then(data => {
                setDonation(data) 
                setSearchDonations(data)
            } )
    }, [])

    return (
        <>
            <div className="container mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    searchDonations.map(donation => <Donation donation={donation} key={donation.id}></Donation>)
                }
            </div>
        </>
    );
};

export default Donations;

Donations.propTypes = {
    searchValue: PropTypes.string.isRequired
}