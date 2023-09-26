import swal from "sweetalert";

const getStoredDonations = () => {
    const storedDonations = localStorage.getItem('donations');
    if (storedDonations) {
        return JSON.parse(storedDonations);
    }
    return [];
}

const setStoredDonations = donation => {
    const storedDonations = getStoredDonations();

    const isExcist = storedDonations.find(storedId => storedId.id === donation.id);
    if (isExcist) {
        swal("You already donated to this campaign.", `${donation.title}`, "warning", { button: false});
    } else {
        storedDonations.push(donation);
        localStorage.setItem('donations', JSON.stringify(storedDonations))
        swal("Successfully donated to this campaign.", `${donation.title}`, "success", { button: false });
    }
}

export { getStoredDonations, setStoredDonations }