import React from 'react';
import "./bloodstories.css";

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
        <div className='blood-stories-container'>
        <h2>Blood Stories</h2>
        <div className='blood-stories-grid'>
 {Stories.map((story)=>(
    <div key={story.id}>
        <img src={story.image} alt="blood-story" className='grid-image-stories' />
        </div>
 ))}
    </div>
    </div>
    </div>
  );
};export default BloodStories;
