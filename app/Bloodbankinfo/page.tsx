import React from "react";
import "./bloodbankinfo.css";

const BloodBankInfo = () => {
    const bloodBankListCard = [
        {
            id: 1,
            bank: "Bhaktapur NRCS Blood Bank,",
            location: "Bhaktapur",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 2,
            bank: "Central NRCS Blood Bank,",
            location: "Soaltee-Mode",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 3,
            bank: "Lalitpur NRCS Blood Bank,",
            location: "Pulchowk",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 4,
            bank: "Frontline Hospital Blood Bank,",
            location: "Old Baneshwor , Kathmandu",
            phone: "01-6611661",
        },
        {
            id: 5,
            bank: "Teaching Hospital,",
            location: "Maharajgunj, Kathmandu",
            phone: "01-6611661",
        },
        {
            id: 6,
            bank: "Gangalal Hospital,",
            location: "Bansbari, Kathmandu",
            phone: "01-6611661",
        },
        {
            id: 7,
            bank: "Lalitpur NRCS Blood Bank,",
            location: "Pulchowk",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 8, // Fixed duplicate ID
            bank: "Prasuti Griha,",
            location: "Thapathali, Kathmandu",
            phone: "01-6612266",
        },
    ];

    const bloodBankListCardOutsideKtm = [
        {
            id: 1,
            bank: "Central NRCS Blood Bank,",
            location: "Soaltee-Mode",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 2,
            bank: "Central NRCS Blood Bank,",
            location: "Soaltee-Mode",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 3,
            bank: "Central NRCS Blood Bank,",
            location: "Soaltee-Mode",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 4,
            bank: "Central NRCS Blood Bank,",
            location: "Soaltee-Mode",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 5,
            bank: "Central NRCS Blood Bank,",
            location: "Soaltee-Mode",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 6,
            bank: "Central NRCS Blood Bank,",
            location: "Soaltee-Mode",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 7,
            bank: "Central NRCS Blood Bank,",
            location: "Soaltee-Mode",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 8,
            bank: "Central NRCS Blood Bank,",
            location: "Soaltee-Mode",
            phone: "01-6611661, 01-6612266",
        },
        {
            id: 9,
            bank: "Central NRCS Blood Bank,",
            location: "Soaltee-Mode",
            phone: "01-6611661, 01-6612266",
        },
    ];

    return (
        <div>
            <div>
                <nav className="blood-bank-info-nav">
                    <h1>Blood Bank Information</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
                        <path
                            fill="#fff"
                            fillOpacity="1"
                            d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                    </svg>
                </nav>
            </div>
            <div className="major-blood-in-ktm">
                <button>Major Blood Bank in and around Kathmandu Valley</button>
            </div>
            <div className="blood-bank-info-card">
                {bloodBankListCard.map((item) => (
                    <div key={item.id} className="list">
                        <h2>{item.bank}</h2>
                        <p>{item.location}</p>
                        <p>{item.phone}</p>
                    </div>
                ))}
            </div>

            <div className="major-blood-out-ktm">
                <button>Major Blood Bank outside Kathmandu Valley</button>
            </div>
            <div className="blood-bank-info-card-outside-ktm">
                {bloodBankListCardOutsideKtm.map((item) => (
                    <div key={item.id} className="list-outside-ktm">
                        <h2>{item.bank}</h2>
                        <p>{item.location}</p>
                        <p>{item.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BloodBankInfo;