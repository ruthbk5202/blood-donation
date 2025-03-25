import React from 'react';
import "./media.css";

const Media = () => {
    const MediaList = [
        {
            id:"1",
            image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/tkp-hlb-.png",
            description:"In january 2021, The kathmandu post listed our Founder/CEO Rumee Singh as one of 10 women who are changing the face of technology in Nepal.(The Kathmandu Post)",
            post:"(The Kathmandu Post)",
            link:"https://kathmandupost.com/science-technology/2021/01/03/the-women-who-are-changing-the-face-of-tech-in-nepa?fbclid=IwAR2os-YFJ6FeeQZV3tKTgpjeM9WW9eT_-A6RB6PmE7VzBIdEzHY7BQQtLe8",
        },
        {
            id:"2",
            image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/new-project.png",
            description:"Business 360 included our founder/CEO rumee Singh under their Annual list of 100 people to watch in 2021. HLB was featured as a promising start-up/new business with Rumee's recognition. ",
            post:"business-360",
            link:"https://www.b360nepal.com/detail/7374/annual-list-of-100-people-to-watch-start-ups-and-new-business",
        },
        {
            id:"3",
            image:"https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/hlb-featured-in-kathmandupost.jpg",
            description:"To address the blood supply and demand gap, Hamro LifeBank maintains a digital database",
            post:"(The Kathmandu Post)",
            link:"https://kathmandupost.com/29/2020/02/16/to-address-the-blood-supply-and-demand-gap-hamro-life-bank-maintains-a-digital-database"

        },
        {
            id:"4",
            image:"https://hamrolifebank.com/img/media/kathmandu-post-image.jpg",
            description:"Kathmandu's blood banks are running out of blood",
            post:".(The kathmandu Post)",
            link:"https://kathmandupost.com/health/2019/05/01/kathmandus-blood-banks-are-running-out-of-blood"

        },
        {
            id:"5",
            image:"https://hamrolifebank.com/img/media/monsoon-blood-donation-drive-concludes.jpg",
            description:"Hamro LifeBank: Monsoon blood donation drive concludes",
            post:"(WAVE Magazine Nepal)",
            link:"https://www.facebook.com/wavemagazine/photos/pcb.10157996104940639/10157996097745639/?type=3&theater"

        },
        {
            id:"6",
            image:"https://hamrolifebank.com/img/media/kathmandu-post.jpg",
            description:"why Kathmandu's blood banks are running dry.",
            post:"(The kathmandu Post)",
            link:"https://www.youtube.com/watch?v=i_9g5eq9mc0"

        },
    ];

    return (
        <div className=''>
            <nav>
            <h6>Media</h6>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fill-opacity="1" d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        </nav> 
        <div className="media-grid-container">
            {MediaList.map((media) => (
            <a  key={media.id} href={media.link} className='media-link' target='_blank' rel="noopener noreferrer">
                <div className="media-container">
                    <img src={media.image} alt={`Media ${media.id}`} />
                    <h1>{media.description}</h1>
                    <h2>{media.post}</h2>
                </div>
                </a>
            ))}
        </div>
        </div>
    );
};

export default Media;