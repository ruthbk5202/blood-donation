import { FC } from 'react';
import "./fundraisinggoals.css";

const FundraisingGoals: FC = () => {
  return (
    <section className="fundraising-goals">
      <div className="container">
        <h2 className="section-title">What are we raising funds for?</h2>

        <div className="goals-content">
          <p>
            We are looking to raise $5,000. With this fundraising round, we will support the operations of the Ragat Chahiyo blood hotline in the upcoming year to support more patients in need. Your donations will help us:
          </p>

          <ul className="goals-list">
            <li>Support with blood search for 4000 more families in need in 2024 & 2025</li>
            <li>Support our team of 3 dedicated hotline team members to manage 200 calls/weekly 24/7</li>
            <li>Recruit and engage at least 20 volunteers to manage blood donation events</li>
            <li>Engage and mobilize 1000 donors to donate regularly</li>
            <li>Manage and maintain our system</li>
            <li>Motivate youth donors through activation events and campaigns.</li>
          </ul>

          <p>
            Please check out the latest report of the hotline statistics here: <a href="https://hamrolifebank.org/reports" target="_blank" rel="noopener noreferrer"><strong>https://hamrolifebank.org/reports</strong></a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundraisingGoals;
