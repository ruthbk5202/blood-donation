import React from 'react';
import "./eventpage.css";

const Blogs = () => {
    const BlogList = [
        {
            id: 1,
            image: "https://hamro-lifebank.s3.amazonaws.com/website-images/m5v04elhu31vl6yvgx9.JPG",
            header: "Give the Gift of life: Donate Blood with Hamro LifeBank and Verisk Nepal",
            paragraph: "Hamro LifeBank and Verisk Nepal organized a Smart Blood Donation Drive, a one-day blood donation event in partnership with Labim Mall and Grande International Hospital. Out of 80 registrants, 74 were eligible to donate blood, while the remaining individuals were ineligible due to health issues and other reasons. ",
            name: "Samjana Karki",
            date: "May 15",
            link:"/giftoflife"
        },
        {
            id: 2,
            image: "https://hamro-lifebank.s3.amazonaws.com/website-images/m4gr7z8x83k3y64g8o8.jpg",
            header: "Hamro Life Bank and omnicom Media Group: Smart Blood donation Event",
            paragraph: "Hamro Life Bank partnered with Omnicom Media Group to organize a smart blood donation event at their premises. In collaboration with Metro Kathmandu Hospital, we successfully collected 22 pints of blood, a life-saving contribution that has the potential to save 66 lives!",
            name: "Samjana Karki",
            date: "April 22",
               link:"/omnicom"
        },
        {
            id: 3,
            image: "https://hamro-lifebank.s3.amazonaws.com/website-images/m4gopomn2ztr6wwh7e6.jpg",
            header: "Hamro Life Bank and Rotaract club of kist at kist hospital Blood Donation Event",
            paragraph: "Hamro Life Bank worked with Rotaract club of kist to organize a blood donation event. With support from Nepal redcross society-Lalitpur, we collected 42 pints of blood, enough to save 126 lives!",
            name: "Syam Rai",
            date: "March 28",
               link:""
        }
    ];

    return (
        <div>
        <nav>
            <h6>Events-Hamro life Bank</h6>
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
                        {/* <div className="date-badge">{blog.date}</div>  */}
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