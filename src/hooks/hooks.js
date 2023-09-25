import { useEffect, useState } from "react"

const useGetDonations = () => {
    const [donations, setDonation] = useState([]);

    useEffect(() => {
        const donationData = async () => {
            const res = await fetch('/donations.json')
            const data = await res.json()
            setDonation(data)
        }
        donationData()
    }, [])
    return [donations]
}

export { useGetDonations }


