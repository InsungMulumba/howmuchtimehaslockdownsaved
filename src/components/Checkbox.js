/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import '../styles/Checkbox.scss';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="form-check">
    <label className="day-container">
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      <p className="day-name"> {label}</p>
    </label>
  </div>
);

export default Checkbox;