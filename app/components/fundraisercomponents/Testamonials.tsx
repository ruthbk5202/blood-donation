import { FC } from 'react';
import "./testimonials.css";
const Testimonials: FC = () => {
  const testimonials = [
    {
      type: 'patient',
      content: "My mother needed surgery on August 27th, but I couldn't donate blood due to my condition. After searching for over 3 hours, no one was available to help. Desperate, I called the Hamro Life Bank hotline. They immediately arranged five donors for my mother's surgery at Norvic Hospital. The staff, the hospital, and the blood weren't easy, so I reached out to Hamro LifeBank for smooth help.",
      name: 'Shristy'
    },
    {
      type: 'donor',
      image: 'https://ext.same-assets.com/1446903409/1893886276.jpeg',
      video: true
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Patient Testimonials</h2>

        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            testimonial.type === 'patient' ? (
              <div className="patient-feedback" key={index}>
                <div className="patient-feedback-content">
                  <p>"{testimonial.content}"</p>
                  <h4>{testimonial.name}</h4>
                </div>
              </div>
            ) : (
              <div className="video-testimonial" key={index}>
                <img
                  src={testimonial.image}
                  alt="Donor Testimonial"
                />
                <div className="play-button"></div>
              </div>
            )
          ))}
        </div>

        <h2 className="section-title">Success Stories</h2>
        <div className="testimonial-container">
          {/* Success stories would go here */}
        </div>

        <h2 className="section-title">Donor Testimonials</h2>
        <div className="testimonial-container">
          <div className="video-testimonial">
            <img
              src="https://ext.same-assets.com/1446903409/1893886276.jpeg"
              alt="Donor Testimonial"
            />
            <div className="play-button"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
