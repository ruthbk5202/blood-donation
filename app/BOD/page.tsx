import React from 'react';

const BoardofDirectors = () => {
    const BoardDirectors=[{
        id:1,
        image:"",
        header:"Niranjan Kuwar, Chairman of the Board ",
        description:"Niranjan Kunwar freelances as a consultant in Kathmandu, Nepal. Mr. Kunwar holds an M.S.Ed from CUNY, New York and used to teach in the New York City school system. In the future, he plans to be more involved in gender and sexuality sensitization programs. He is currently taking a one-year diploma course in Narrative Therapy. Kunwar's nonfiction pieces focus on - but are not limited to - the interconnections between the arts and education. Mr. Kunwar brings in his new ways of thinking and insights to HLB that challenges us to tackle complex problems through better innovation and performance."
      
    },{
        id:2,
        image:"",
        header:"Assoc. Prof. Dr. Smrity Maskey, Board of Director",
        description:"Dr. Smrity Maskey started her professional experience from 2006 at ENT Dept of Nepal Medical College after she graduated Nepal Medical College. She further pursued M.D in ObGyn from King Edward’s Medical University, Lahore Pakistan in 2012. She was awarded as the Young Gynecologist in 2015 AOCOG Malaysia. She now works at KIST medical college as Associate professor and gynecologist and obstetrician. She is also a fitness instructor and knows how to stay fit and healthy. Dr. Maskey birthed the concept of HLB from the needs of her patients and has always been our ally and advisor from the very beginning.",
    },
    {
      id:3,
      image:"",
      header:"Dr. Apurva Koirala, Board of Director",
      description:"Dr. Apurva Koirala is a Healthcare Project Manager, currently pursuing his Master in Sciences in Clinical Informatics from Northwestern University, Chicago. He completed his medical school from Dow Medical College, DUHS, Karachi, Pakistan. Dr. Koirala worked as a Medical Officer in a number of hospitals in Kathmandu Valley before undertaking a new challenge of delving into healthcare technology and data science. Dr. Koirala started his new career in informatics with Hamro LifeBank and was crucial in creating a robust data-informed system and engaging stakeholders. We are extremely proud to now have him serve as a Board of Director. Along with increasing technological awareness and advancements, he envisions an interoperable healthcare information management system for Nepal.",

    },{
        id:4,
        image:"",
        header:"Dr. Smriti Mathema, Board of Director",
        description:
"Dr. Smriti Mathema is Assistant Professor of Pediatrics at Kathmandu Medical College Teaching Hospital. She was the first Nepali to be selected by the International Pediatric Association for the Child Health Emerging Leaders Program in 2019. Trained in Vaccinology, she has served as the Chairperson of the Immunization Committee of the Nepal Pediatric Society, been the Editor-in-Chief of their Immunization Guidebook and Recommendation and has trained numerous pediatricians and health workers throughout the country to be Immunization Advocacy Champions. She is currently pursuing a project to design a course and develop vaccinology expertise in Nepal. She is grateful every single day for being a mother of 2 amazing children. She strongly feels that a good determined leadership is the key to bring about much needed change in improving child health in Nepal. Dr. Mathema shares her leadership and expertise with HLB and challenges us to steer in the right direction."
    }
]
  return (
    <div>
            <nav></nav>
        <div >
           {BoardDirectors.map((index)=>(
            <div key={index.id} className='board-of-directors'>
                <img src={index.image} alt={index.header}></img>
                <h2>{index.header}</h2>
                <p>{index.description}</p>
            </div>
           ))}
            <image></image>
            <h1>Niranjan Kuwar, Chairman of the Board</h1>
            <p>Niranjan Kunwar freelances as a consultant in Kathmandu, Nepal. Mr. Kunwar holds an M.S.Ed from CUNY, New York and used to teach in the New York City school system. In the future, he plans to be more involved in gender and sexuality sensitization programs. He is currently taking a one-year diploma course in Narrative Therapy. Kunwar's nonfiction pieces focus on - but are not limited to - the interconnections between the arts and education. Mr. Kunwar brings in his new ways of thinking and insights to HLB that challenges us to tackle complex problems through better innovation and performance.</p>
        </div>
    </div>
  )
}; export default BoardofDirectors;
