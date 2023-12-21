import React, { memo } from 'react';

const CheckBox = ({ checked, disabled, handleCheckBoxChange }) =>
    <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => handleCheckBoxChange(e.target.checked)}
    />


export default memo(CheckBox);