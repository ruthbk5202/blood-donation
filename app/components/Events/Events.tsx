import React from 'react';
import "./events.css";
const Events = () => {
  const Events = [
    
    {
      id: 1,
      image: "https://hamro-lifebank.s3.amazonaws.com/website-images/m4gqe2w503sbmuludanl.jpg",
    },
    {
      id: 2,
      image: "https://hamro-lifebank.s3.amazonaws.com/website-images/m2spy4dqmzftd6o0lj.jpg",
    },
    {
      id: 3,
      image: "https://hamro-lifebank.s3.amazonaws.com/website-images/m1qcq7mv1gvm2iljl3jj.jpg",
    },
    {
      id: 4,
      image: "https://hamro-lifebank.s3.amazonaws.com/website-images/ly6srq8jwvj6odgvmse.jpg",
    },
    {
      id: 6,
      image: "https://hamro-lifebank.s3.amazonaws.com/website-images/ly6srq8jwvj6odgvmse.jpg",
    },
  ];

  return (
    <div className="events-container">
        <div>
          <div className="events-title">
      <h2> Events</h2>
      </div>
      <div className="events-grid">
        {Events.map((item) => (
          <div key={item.id} className="event-item">
            <img src={item.image} alt={`Event ${item.id}`} className="event-image" />
          </div>
        ))}
      </div>
      </div>
     
      <div className='fill-form'>
        <div className="svg-img">
        <img src="images/blood-transfusion.svg" alt="svg blood donation">
        </img>

        </div>
        <div className="form-details">
           <h3>Fill out the form and send us your details</h3>
           <p>someone will get back to you asap. If it's emergency,</p>
           <p>Call us  @+977 9807654321 or message us at Facebook</p>
            <div className='btn-div'>
            <button className='request-blood-btn'>Request Blood</button>
            <button className='denote-blood-btn'>Donate Blood</button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Events;