import React from 'react';
import "./news.css";

const Newsletters = () => {
    const news = [
        {
            id: 1,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024",
            link:"https://assets.rumsan.net/hamro-lifebank/website/images/redpaper,-2024-q3.pdf"
        },
        {
            id: 2,
            header: "Newsletter Volume 2: issue 1",
            q: "Q3, 2024",
            link:"https://assets.rumsan.net/hamro-lifebank/website/images/redpaper,-2024-q2-newsletter.pdf"
        },
        {
            id: 3,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024",
            link:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/redpaper,-2023-q2.pdf"
        },
        {
            id: 4,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024",
            link:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/redpaper,-2023-q1.pdf",
        },
        {
            id: 5,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024",
            link:"https://mailchi.mp/6da5f9f9a538/red-paper-2021-quarter-i-6330378",
        },
        {
            id: 6,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024",
            link:"https://mailchi.mp/f149b6bab0bb/red-paper-2021-quarter-i-6263466"
        },
        {
            id: 7,
            header: "Newsletter Volume 6: issue 3",
            q: "Q3, 2024",
            link:"https://mailchi.mp/e19022a76be0/red-paper-2020-quarter-ii-5850882?fbclid=IwAR0swwkL2OhZRkNO6FiqzcypI0gp-A_aFj0HCSpotjj9ztpi7zzh-Q4QQsQ"
        }
    ];

    return (
        <div className="news-container">
            {news.map((item) => (
                <a href={item.link} target='_blank'>
                <div key={item.id} className="volume-div">
                    <h2>{item.header}</h2>
                    <p>{item.q}</p>
                </div>
                </a>
            ))}
        </div>
    );
};

export default Newsletters;