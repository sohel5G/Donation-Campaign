import { getStoredDonations } from "../../localstore/localStore";
import Donationed from "./Donationed";


const Donationeds = () => {
    const LsDonations = getStoredDonations();
    return (
        <>
            <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-7 pb-11">
                {
                    LsDonations.map(donationed => <Donationed donationed={donationed} key={donationed.id}></Donationed>)
                }
            </div>
        </>
    );
};
export default Donationeds;