import React from "react";
import "./vedio.css";

const Vedios = () => {
  const vediosList = [
    {
      id: 1,
      video:
        "https://www.youtube.com/embed/oXRVHusvcMU", // Updated to embed URL
    },
    {
      id: 2,
      video:
        "https://www.shutterstock.com/video/clip-1102889657-blood-transfusion-through-transparent-tube-on-blurred",
    },
    {
      id: 3,
      video:
        "https://www.shutterstock.com/video/clip-1100635263-center-lifeblood-donation-blood-transfusion-clinic-plasma",
    },
    {
      id: 4,
      video:
        "https://www.shutterstock.com/video/clip-1092819447-blood-transfusion-different-types",
    },
    {
      id: 5,
      video:
        "https://www.shutterstock.com/video/clip-1088990595-world-blood-donor-day-sampling-man-close-up",
    },
    {
      id: 6,
      video:
        "https://www.shutterstock.com/video/clip-1085398883-concept-give-blood-donation-transfusion-doctor-white",
    },
    {
      id: 7,
      video:
        "https://www.shutterstock.com/video/clip-1089775059-hand-blood-donor-squeezes-rubber-bulb-form",
    },
  ];

  return (
    <div>
      <nav className="nav-vedios">
        <h1>Videos</h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fill-opacity="1" d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
      </nav>

      <div className="grid-map-vedio">
        {vediosList.map((item) => (
          <div key={item.id} className="video-item">
            {item.video.includes("youtube.com") ? (
              <iframe
                width="300"
                height="200"
                src={item.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                controls
                width="300"
                height="200"
                src={item.video}
                style={{ margin: "10px 0" }}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vedios;