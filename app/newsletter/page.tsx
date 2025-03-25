import React from 'react';
import "./news.css";

const Newsletters = () => {
    const news = [
        {
            id: 1,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024"
        },
        {
            id: 2,
            header: "Newsletter Volume 2: issue 1",
            q: "Q3, 2024"
        },
        {
            id: 3,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024"
        },
        {
            id: 4,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024"
        },
        {
            id: 5,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024"
        },
        {
            id: 6,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024"
        },
        {
            id: 7,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024"
        }
    ];

    return (
        <div className="news-container">
            {news.map((item) => (
                <div key={item.id} className="volume-div">
                    <h2>{item.header}</h2>
                    <p>{item.q}</p>
                </div>
            ))}
        </div>
    );
};

export default Newsletters;