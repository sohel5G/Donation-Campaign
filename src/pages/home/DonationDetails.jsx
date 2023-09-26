import { useLoaderData, useParams } from "react-router-dom";
import { setStoredDonations } from "../../localstore/localStore";

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();

    const donation = donations.find(donationId => donationId.id === parseInt(id));
    const { img, price, title, description, txt_color } = donation;

    return (
        <>
            <section className="container mx-auto px-10 pb-10">
                <div style={{ backgroundImage: `url('${img}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '5px' }}>
                    <div className="h-[300px] md:h-[400px] lg:h-[500px] relative">
                        <div className="bg-[#0B0B0B80] py-7 absolute left-0 bottom-0 min-w-full">
                            <button onClick={() => setStoredDonations(donation)} style={{ backgroundColor: txt_color, color: 'white', padding: '10px 20px', borderRadius: '5px', marginLeft: '40px' }}>Donate {price}</button>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <h1 className="text-4xl font-bold py-6">{title}</h1>
                    <p className="text-lg">{description}</p>
                </div>
            </section>
        </>
    );
};

export default DonationDetails;