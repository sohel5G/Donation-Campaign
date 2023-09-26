
import { useEffect, useState } from "react"

const useGetDonations = () => {
    const [donations, setDonation] = useState([]);

    useEffect(() => {
        const donationData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setDonation(data)
        }
        donationData()
    }, [])

    return [donations]
}


export { useGetDonations }


