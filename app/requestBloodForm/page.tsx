"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./requestBloodForm.css";


type FormData = {
  patientName: string;
  bloodGroup: string;
  unitsRequired: string;
  contactPhone: string;
};


type Errors = {
  patientName?: string;
  bloodGroup?: string;
  unitsRequired?: string;
  contactPhone?: string;
};

const RequestBloodForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    patientName: "",
    bloodGroup: "",
    unitsRequired: "",
    contactPhone: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    if (!formData.contactPhone) newErrors.contactPhone = "Contact phone is required";

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

          {/* Blood Group */}
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

          {/* Units Required */}
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

          {/* Contact Phone */}
          <div className="form-group">
            <label htmlFor="contactPhone">Contact Phone</label>
            <input
              type="text"
              id="contactPhone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              placeholder="Enter contact phone number"
            />
            {errors.contactPhone && <span className="error">{errors.contactPhone}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestBloodForm;