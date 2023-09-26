import { useEffect, useState } from "react";
import { getStoredDonations } from "../../localstore/localStore";
import Donationed from "./Donationed";


const Donationeds = () => {

    const [lsDonations, setLsDonations] = useState([])
    const [slicedLsDonations, setSlicedLsDonations] = useState([])

    const handleShowAll = () => {
        setSlicedLsDonations(lsDonations.slice(0, lsDonations.length))
    }
    console.log(slicedLsDonations.length)
    useEffect(()=> {
        const lsDonations = getStoredDonations();
        setLsDonations(lsDonations);
        setSlicedLsDonations(lsDonations)

        if (lsDonations.length > 4) {
            setSlicedLsDonations(lsDonations.slice(0, 4))
        }
    },[])

    return (
        <>
            <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-7 pb-11">
                {
                    slicedLsDonations.map(donationed => <Donationed donationed={donationed} key={donationed.id}></Donationed>)
                }
            </div>
            {
                slicedLsDonations.length === 0 && <div className="h-52 flex items-center justify-center"><h1 className="text-3xl text-center">No Data found</h1></div>
            }
            <div className={`text-center pb-10 ${lsDonations.length <= 4 || lsDonations.length === slicedLsDonations.length ? 'hidden' : ''}`}>
                <button className="bg-[#FF444A] text-white py-2 px-5 text-sm font-semibold rounded-md" onClick={handleShowAll}>See All {lsDonations.length}</button>
            </div>
        </>
    );
};
export default Donationeds;