"use client";
import React from "react";
import { GoogleMap, Marker } from '@react-google-maps/api';
import { IoSearchSharp } from "react-icons/io5";
import { BsDashLg } from "react-icons/bs";
import "./upcomingevents.css";

const UpComingEvents = () => {
  const upcomingEvents = [
    {
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default4.jpg",
      location: "Sabhagriha Chowk",
      date: "March 19, 2025",
      Beneficiary: "Pokhara Regional Blood Bank",
      coordinates: { lat: 28.2096, lng: 83.9856 }, // Pokhara
    },
    {
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default5.jpg",
      location: "Kupondole",
      date: "March 22, 2025",
      Beneficiary: "Red Cross-Lalitpur",
      coordinates: { lat: 27.6781, lng: 85.3167 }, // Kupondole, Lalitpur
    },
    {
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default6.jpg",
      location: "Chyasal",
      date: "March 22, 2025",
      Beneficiary: "Red Cross-Lalitpur",
      coordinates: { lat: 27.6667, lng: 85.3167 }, // Chyasal, Lalitpur
    },
    {
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default4.jpg",
      
      location: "Pulchowk",
      date: "March 22, 2025",
      Beneficiary: "Red Cross-Lalitpur",
      coordinates: { lat: 27.6786, lng: 85.3169 }, // Pulchowk, Lalitpur
    },
    {
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default5.jpg",
      location: "Mahendrapul",
      date: "March 21, 2025",
      Beneficiary: "Pokhara Regional Blood Bank",
      coordinates: { lat: 28.2096, lng: 83.9856 }, // Pokhara
    },
    {
      
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default6.jpg",
      
      location: "Mangalbazar",
      date: "March 15, 2025",
      Beneficiary: "Red Cross-Lalitpur",
      coordinates: { lat: 27.6714, lng: 85.3236 }, // Mangalbazar, Lalitpur
    },
    {
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default6.jpg",
      location: "Nepalgunj",
      date: "March 12, 2025",
      Beneficiary: "Pokhara Regional Blood Bank Nepalgunj",
      coordinates: { lat: 28.0500, lng: 81.6167 }, // Nepalgunj
    },
    {
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default5.jpg",
      date: "March 8, 2025",
      Beneficiary: "Red Cross-Lalitpur",
      coordinates: { lat: 27.7372, lng: 85.3167 }, // Samakhusi, Kathmandu
    },
    {
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default6.jpg",
      location: "Harisiddhi",
      date: "March 8, 2025",
      Beneficiary: "Red Cross-Lalitpur",
      coordinates: { lat: 27.6417, lng: 85.3417 }, // Harisiddhi, Lalitpur
    },
    {
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default6.jpg",
      location: "Na. Tol",
      date: "March 8, 2025",
      Beneficiary: "Red Cross-Lalitpur",
      coordinates: { lat: 27.6714, lng: 85.3236 }, // Na. Tol, Lalitpur
    },
    {
      image: "https://rumsan.nyc3.cdn.digitaloceanspaces.com/askbhunte/assets/blood-donation-event-default5.jpg",
      location: "Pokhara 6 Lakeside",
      date: "March 6, 2025",
      Beneficiary: "Pokhara Regional Blood Bank Nepalgunj",
      coordinates: { lat: 28.2096, lng: 83.9856 }, // Pokhara
    },
  ];
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Add your API key in .env.local
  // });

  // const mapContainerStyle = {
  //   width: "100%",
  //   height: "400px",
  // };

  // const center = {
  //   lat: 27.7172, // Center the map on a default location (e.g., Kathmandu)
  //   lng: 85.324,
  // };

  // if (loadError) return <div>Error loading maps</div>;
  // if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div>
      <div className="upcoming-donation-event">
        <nav className="upcoming-event-nav">
          <h6>Upcoming Donation Events</h6>
          <div className="show-my-location-and-country-btn">
            <button>Show My Location</button>
            <button>Show Country</button>
          </div>
        </nav>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31397712412!2d85.3261328!3d27.708960349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1742640199364!5m2!1sen!2snp" width="100%" height="450"  loading="lazy" ></iframe>
        <div className="input-searchbar">
          <input type="text" placeholder="Search events by Blood Banks" />
          <input type="text" placeholder="Search events by location" />
          <button className="location-search-btn"><IoSearchSharp /></button>
        </div>
        <div>
          {/* <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
          >
            {upcomingEvents.map((event, index) => (
              <Marker
                key={index}
                position={event.coordinates}
                title={event.location}
              /> */}
            {/* ))}
          </GoogleMap> */}
        </div>
        <div>
          <nav className="cant-find-nearby-event">
            <div className="sign-up-to-donate">
          <h1>
            Can't find a nearby event?
          </h1>
          {/* <BsDashLg  className="bsdash"/> */}
            <button>Sign up to donate later</button>
          </div>
          </nav>
        </div>
        <div>
          <h6>Past Donation Events</h6>
          <div className="upcoming-events-div">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="map-div">
                <img src={event.image} alt="event" />
                <div className="description-box">
                  <p>{event.location}</p>
                  <p>{event.date}</p>
                  <p>{event.Beneficiary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      <div className="form-details-upcomming">
           <h3>Fill out the form and send us your details</h3>
           <p>someone will get back to you asap. If it's emergency,</p>
           <p>Call us  @+977 9807654321 or message us at Facebook</p>
            <div className='btn-div-upcoming'>
            <button className='request-blood-btn-upcoming'>Request Blood</button>
            <button className='denote-blood-btn-upcoming'>Donate Blood</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvents;