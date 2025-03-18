import React from 'react'

 const Events = () => {
    const Events=[
        {
            id:1,
            image:"https://hamro-lifebank.s3.amazonaws.com/website-images/m4gqlupcult32sq9i1b.jpg",
        },
        {
            id:2,
            image:"https://hamro-lifebank.s3.amazonaws.com/website-images/m4gqe2w503sbmuludanl.jpg",
        },
        {
            id:3,
            image:"https://hamro-lifebank.s3.amazonaws.com/website-images/m2spy4dqmzftd6o0lj.jpg",
        },
        {
            id:4,
            image:"https://hamro-lifebank.s3.amazonaws.com/website-images/m1qcq7mv1gvm2iljl3jj.jpg",
        },
        {
            id:1,
            image:"https://hamro-lifebank.s3.amazonaws.com/website-images/m1qcq7mv1gvm2iljl3jj.jpg",
        },
        {
            id:5,
            image:"https://hamro-lifebank.s3.amazonaws.com/website-images/ly6srq8jwvj6odgvmse.jpg",
        },
        {
            id:6,
            image:"https://hamro-lifebank.s3.amazonaws.com/website-images/ly6srq8jwvj6odgvmse.jpg",
        }
    ]
  return (
    <div>
        <div>
            <h2>Events</h2>
          
                {Events.map((item)=>{
                    <div key={item.id}>
                        <img src={item.image}></img>
                        
                    </div>
                    })}

          
        </div>
    </div>
  )
};
export default Events;
