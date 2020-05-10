/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import '../styles/Checkbox.scss';

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <label className="custom-checkbox">
    
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
      />
    <span>{label}</span>
  </label>
);

export default Checkbox;