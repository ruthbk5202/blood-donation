import React from 'react';
import "./blogs.css";

const Blogs = () => {
    const BlogList = [
        {
            id: 1,
            image: "https://hamro-lifebank.s3.amazonaws.com/website-images/lhhn77a4qy2p6n5uhe.jpg",
            header: "Celebrate and Save Lives: Why Blood Donation is Crucial During Festive Times",
            paragraph: "The festive season is a time for joy, celebration, and togetherness. Families reunite, communities gather, and the spirit of giving is everywhere. However, while people focus on celebrations, an often-overlooked need becomes even more critical: blood donation.",
            name: "Smiriti Chettri",
            date: "May 15",
            link:"/celebrateandsave"
        },
        {
            id: 2,
            image: "https://assets.rumsan.net/hamro-lifebank/website/images/journey-of-blood.png",
            header: "Saving Lives Comes at a Cost: The Truth Behind Blood Bank Charges",
            paragraph: "Donating blood is a selfless act of kindness that can save lives. Blood is a vital resource that is needed for medical procedures, surgeries, and emergency situations. Without blood donors, hospitals would not be able to provide life-saving treatments to those in need.",
            name: "Dristy Priya",
            date: "April 22",
               link:"/saving"
        },
        {
            id: 3,
            image: "https://assets.rumsan.net/hamro-lifebank/website/images/managing-blood-during-a-pandemic-like-covid19-json.jpg",
            header: "Story of a Dialysis Patient: Help Saving Lives by Donating Blood",
            paragraph: "Dialysis is lifesaving for millions of people worldwide. Unfortunately, it's not a complete or lasting solution; kidney patients on dialysis suffer numerous complications and, on average, survive just three to five years and suffer many complications throughout their treatment.",
            name: "Syam Rai",
            date: "March 28",
               link:""
        }
    ];

    return (
        <div>
        <nav>
            <h6>Blogs-Hamro life Bank</h6>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fill-opacity="1" d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
        </nav>
        <div className="blog-container">
            {BlogList.map((blog) => (
                <div key={blog.id} className="blog-card">
                    <a href={blog.link} target='_blank'className='blog-link'  rel="noopener noreferrer" >
                    <img src={blog.image} alt={blog.header} className="blog-image" />
                    <div className="blog-content">
                        <h2 className="blog-header">{blog.header}</h2>
                        <div className="date-badge">{blog.date}</div> 
                        <p className="blog-paragraph">{blog.paragraph}</p>
                        <p className="blog-author">— {blog.name}</p>
                    </div>
                    </a>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Blogs;