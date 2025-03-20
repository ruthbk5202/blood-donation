"use client";
import React from "react";
import "./upcomingevents.css";

const UpComingEvents = () => {
  const upcomingEvents = [
    {
      image:
        "	https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default4.jpg",
      location: "Sabhagriha Chowk",
      date: "march 19, 2025",

      Beneficiary: "Pokhara Regional Blood Bank ",
    },
    {
      image:
        "	https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default3.jpg",
      location: "Sabhagriha Chowk",
      date: "march 19, 2025",

      Beneficiary: "Pokhara Regional Blood Bank ",
    },
    {
      image:
        "	https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default3.jpg",
        location: "Sabhagriha Chowk",
        date: "march 19, 2025",
        Beneficiary: "Pokhara Regional Blood Bank ",

    },
    {
      image:
        "	https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default3.jpg",
      location: "Sabhagriha Chowk",
      date: "march 19, 2025",

      Beneficiary: "Pokhara Regional Blood Bank ",
    },
    {
      image:
        "	https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default3.jpg",
      location: "Sabhagriha Chowk",
      date: "march 19, 2025",

      Beneficiary: "Pokhara Regional Blood Bank ",
    },
    {
      image:
        "	https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default3.jpg",
      location: "Sabhagriha Chowk",
      date: "march 19, 2025",

      Beneficiary: "Pokhara Regional Blood Bank ",
    },
    {
      image:
        "	https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default3.jpg",
      location: "Sabhagriha Chowk",
      date: "march 19, 2025",

      Beneficiary: "Pokhara Regional Blood Bank ",
    },
    {
      image:
        "	https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default3.jpg",
      location: "Sabhagriha Chowk",
      date: "march 19, 2025",

      Beneficiary: "Pokhara Regional Blood Bank ",
    },
    {
      image:
        "	https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default3.jpg",
      location: "Sabhagriha Chowk",
      date: "march 19, 2025",

      Beneficiary: "Pokhara Regional Blood Bank ",
    },
    {
      image:
        "	https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default3.jpg",
      location: "Sabhagriha Chowk",
      date: "march 19, 2025",

      Beneficiary: "Pokhara Regional Blood Bank ",
    },
  ];

  return (
    <div>

      <nav className="upcoming-event-nav">
        <h6>Upcoming Donation Events</h6>
        <button className="">Show My Location</button>
        <button className="">Show Country</button>
        <div>
          <input type="search events by Blood Banks"></input>
          <input type="search events by location"></input>
          <button></button>
        </div>
        <div>
          <img></img>
        </div>
        <div>
          <h1>
            Can't find a nearby event?
            <button>sign up to donate later</button>
          </h1>
        </div>
        <div>
          <h6>Past Donation Events</h6>
          <div className="upcoming-events-div">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="map-div">
                <img src={event.image} alt="event"></img>
                <div className="description-box">
                  <h6>{event.location}</h6>
                  <p>{event.date}</p>
                <p>{event.Beneficiary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default UpComingEvents;
