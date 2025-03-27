import { FC } from 'react';
import "./partners.css";

const Partners: FC = () => {
  const partners = [
    {
      name: 'Ncell',
      logo: 'https://ext.same-assets.com/1446903409/1215963466.png'
    },
    {
      name: 'Labim Mall',
      logo: 'https://ext.same-assets.com/1446903409/3669977495.png'
    },
    {
      name: 'Versik',
      logo: 'https://ext.same-assets.com/1446903409/3896205359.png'
    },
    {
      name: 'Grande Hospital',
      logo: 'https://ext.same-assets.com/1446903409/958716714.png'
    },
    {
      name: 'Cedar Gate',
      logo: 'https://ext.same-assets.com/1446903409/2780487644.png'
    }
  ];

  return (
    <section className="partners">
      <div className="container">
        <h2 className="section-title">Our Partners, Funders, Supporters and Community for 2024</h2>

        <div className="partners-container">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="partner-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
