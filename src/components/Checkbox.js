import React from "react";
import '../styles/Checkbox.scss';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <div className="day-container">
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      <p className="day-name"> {label}</p>
    </div>
  </div>
);

export default Checkbox;