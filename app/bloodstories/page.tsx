import React from 'react';
import "./bloodstories.css";
import Share from "../components/sharestories/Share";

const BloodStories = () => {
    const Stories=[
        {id:1,
            image:"https://hamrolifebank.com/img/blood-stories/25.png"
        },
        {id:2,
            image:"https://hamrolifebank.com/img/blood-stories/6.png"
        },
        {id:3,
            image:"	https://hamrolifebank.com/img/blood-stories/11.png"
        },
        {id:4,
            image:"	https://hamrolifebank.com/img/blood-stories/16.png"
        },
        {id:5,
            image:"	https://hamrolifebank.com/img/blood-stories/35.png"
        },
        {id:6,
            image:"	https://hamrolifebank.com/img/blood-stories/36.png"
        },
        {id:7,
            image:"	https://hamrolifebank.com/img/blood-stories/33.png"
        },
        {id:8,
            image:"	https://hamrolifebank.com/img/blood-stories/28.png"
        },
        {id:9,
            image:"	https://hamrolifebank.com/img/blood-stories/26.png"
        },
        {id:10,
            image:"	https://hamrolifebank.com/img/blood-stories/24.png"
        },
        {id:11,
            image:"	https://hamrolifebank.com/img/blood-stories/17.png"
        },
        {id:12,
            image:"	https://hamrolifebank.com/img/blood-stories/1.png"
        },
        {id:13,
            image:"	https://hamrolifebank.com/img/blood-stories/19.png"
        }
    ];
  return (
    <div>
            <nav className='blood-stories-nav'>
        <h2>Blood Stories</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
        </nav>
        <div className='blood-stories-container'>
        <div className='blood-stories-grid'>
 {Stories.map((story)=>(
    <div key={story.id}>
        <img src={story.image} alt="blood-story" className='grid-image-stories' />
        </div>
 ))}
    </div>
    <Share/>
    </div>
    </div>
  );
};export default BloodStories;
