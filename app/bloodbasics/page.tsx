import React from "react";
import "./bloodbasics.css";
const BloodBasics = () => {
  return (
    <div className="blood-basics">
      <div className="blood-basics-container">
        <div >
          <h1>Blood Donation</h1>
          <p>
            A single donation can save three lives. One blood donation provides
            different blood components that can help up to three different
            people. Blood banking refers to the process of collecting,
            separating, and storing blood. Blood banks collect blood and
            separate it into its various components so they can be used most
            effectively according to the needs of the patient. The donor usually
            gives one pint of whole blood. The blood is tested for blood type
            and infectious disease (HIV, Hepatitis B, Hepatitis C and Syphilis),
            and then the blood is separated into its components red blood cells,
            plasma and platelets. The stock blood is then crossmatched with
            patients blood before transfusion. Blood donation is safe. New,
            disposable equipment is used for each donor, so there's no risk of
            contracting a bloodborne infection by donating blood. Within 24
            hours of a blood donation, your body replaces the lost fluids. And
            after several weeks, your body replaces the lost red blood cells.
            Health benefits of donating blood include good health and reduced
            risk of cancer and hemochromatosis. It helps in reducing the risk of
            damage to liver and pancreas. Donating blood may help in improving
            cardiovascular health and reducing obesity.
          </p>
        </div>
        <div className="eligible">
          <h1>You are eligible to donate blood if:</h1>
          <ul>
            <li>you are in good health</li>
            <li>weigh at least 45kg</li>
            <li>you are 18 to 65 years old</li>
          </ul>
        </div>
        <div className="not-eligible">
          <h1>You are not eligible to donate blood if you:</h1>

          <p>
            <ul>
              <li>have ever used self-injected drugs (non-prescription)</li>
            </ul>
          </p>
          <p>
            You need to prepare your body. It is important to eat iron-rich
            foods such as red meats, fish, beans and spinach, drink plenty of
            water the two days prior to donating, get a good sleep and eat a
            healthy meal two hours before your donation.
          </p>
        </div>
        <div className="about-blood">
          <h1 >About Blood</h1>
          <p>
            Blood is a body fluid in humans and other animals that has many
            different functions, including:
          </p>
          <ul>
            <li>transporting oxygen and nutrients to the lungs and tissues</li>
            <li>forming blood clots to prevent excess blood loss</li>
            <li>
              bringing waste products to the kidneys and liver, which filter and
              clean the blood
            </li>
            <li>regulating body temperature</li>
          </ul>
        </div>
        <div >
          <p>
            There are four blood groups: A, B, AB and O and two types of RH
            factor: Positive and Negative.
          </p>
          <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/blood-group.png"></img>
          <p>
            Blood has four main components: plasma, red blood cells, white blood
            cells, and platelets. The blood that runs through the veins,
            arteries, and capillaries is known as whole blood, a mixture of
            about 55 percent plasma and 45 percent blood cells.
          </p>
          <img
            src="	https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/composition.png
"
          ></img>
        </div>
        <div className="plasma">
          <h1>Plasma</h1>
          <p>
            The liquid component of blood is called plasma, a mixture of water,
            sugar, fat, protein, and salts. The main job of the plasma is to
            transport blood cells throughout your body along with nutrients,
            waste products, antibodies, clotting proteins, chemical messengers
            such as hormones, and proteins that help maintain the body's fluid
            balance.
          </p>
          <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/plasma.png"></img>
        </div>
        <div className=" group-description">
        <div className="red-blood-cell">
          <h1>Red Blood Cell</h1>
          <p>
            Known for their bright red color, red cells are the most abundant
            cell in the blood, accounting for about 40 to 45 percent of its
            volume. The shape of a red blood cell is a biconcave disk with a
            flattened center - in other words, both faces of the disc have
            shallow bowl-like indentations (a red blood cell looks like a
            donut).
          </p>
          <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/rbc.png"></img>
        </div>
        <div>
          <h1>White Blood cells</h1>
          <p>
            White blood cells protect the body from infection. They are much
            fewer in number than red blood cells, accounting for about 1 percent
            of your blood.
          </p>
          <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/wbc.png"></img>
        </div>
        <div>
          <h1>Platelets</h1>
          <p>
            Unlike red and white blood cells, platelets are not actually cells
            but rather small fragments of cells. Platelets help the blood
            clotting process (or coagulation) by gathering at the site of an
            injury, sticking to the lining of the injured blood vessel, and
            forming a platform on which blood coagulation can occur. This
            results in the formation of a fibrin clot, which covers the wound
            and prevents blood from leaking out.
          </p>
          <img src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/hamro-lifebank/website/images/platelets.png"></img>
        </div>
      </div>
      </div>
    </div>
  );
};
export default BloodBasics;
