"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./requestBloodForm.css";

type FormData = {
  patientName: string;
  bloodGroup: string;
  unitsRequired: string;
  contactPersonPhoneNumber: string;
  hospitalName: string; 
  hospitalAddress: string; 
  file: File | null; 
  notes:string;
};

type Errors = {
  patientName?: string;
  bloodGroup?: string;
  unitsRequired?: string;
  contactPersonPhoneNumber?: string;
  hospitalName?: string; 
  hospitalAddress?: string; 
  file?: string; 
  notes?:string;
};

const RequestBloodForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    patientName: "",
    bloodGroup: "",
    unitsRequired: "",
    contactPersonPhoneNumber: "",
    hospitalName: "", 
    hospitalAddress: "", 
    file: null, 
    notes:"",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0], 
      });
    }
  };

  const handleChangeNotes= (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.patientName) newErrors.patientName = "Patient name is required";
    if (!formData.bloodGroup) newErrors.bloodGroup = "Blood group is required";
    if (!formData.unitsRequired) newErrors.unitsRequired = "Units required is required";
    if (!formData.contactPersonPhoneNumber) newErrors.contactPersonPhoneNumber = "Contact phone is required";
    if (!formData.hospitalName) newErrors.hospitalName = "Hospital name is required"; 
    if (!formData.hospitalAddress) newErrors.hospitalAddress = "Hospital address is required"; 
    if (!formData.file) newErrors.file = "File is required"; 

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Blood request submitted successfully!");
      router.push("/");
    }
  };

  return (
    <div>
      <nav className="blood-req-nav">
        <h6>Blood Request Form</h6>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,32L80,64C160,96,320,160,480,170.7C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </nav>
      <div className="request-blood-container">
        <div className="request-blood-form-container">
          <h1>Request Blood</h1>
          <form onSubmit={handleSubmit} className="request-blood-form">
            <div className="form-group">
              <label htmlFor="patientName">Patient Name</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Enter patient's name"
              />
              {errors.patientName && <span className="error">{errors.patientName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              {errors.bloodGroup && <span className="error">{errors.bloodGroup}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="unitsRequired">Units Required</label>
              <input
                type="number"
                id="unitsRequired"
                name="unitsRequired"
                value={formData.unitsRequired}
                onChange={handleChange}
                placeholder="Enter units required"
              />
              {errors.unitsRequired && <span className="error">{errors.unitsRequired}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="contactPersonPhoneNumber">Contact Person Phone Number</label>
              <input
                type="text"
                id="contactPersonPhoneNumber"
                name="contactPersonPhoneNumber"
                value={formData.contactPersonPhoneNumber}
                onChange={handleChange}
                placeholder="Enter contact phone number"
              />
              {errors.contactPersonPhoneNumber && <span className="error">{errors.contactPersonPhoneNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="hospitalName">Hospital Full Name</label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                placeholder="Enter hospital name"
              />
              {errors.hospitalName && <span className="error">{errors.hospitalName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="hospitalAddress">Hospital Address</label>
              <input
                type="text"
                id="hospitalAddress"
                name="hospitalAddress"
                value={formData.hospitalAddress}
                onChange={handleChange}
                placeholder="Enter hospital address"
              />
              {errors.hospitalAddress && <span className="error">{errors.hospitalAddress}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="file">Upload File</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx" 
              />
              {errors.file && <span className="error">{errors.file}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="notes">Additional Notes</label>
              <textarea id="notes" name="notes" value={formData.notes} onChange={handleChangeNotes} placeholder="Enter any additional information"></textarea>
            </div>

          </form>
            <button type="submit" className="submit-button">
              Submit Request
            </button>
        </div>
      </div>
    </div>
  );
};

export default RequestBloodForm;