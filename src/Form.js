import React from 'react';
import CheckBox from "./CheckBox";

const Form = ({ checkBoxes, handleCheckBoxChange }) => {
    // Disable checkboxes if every checkbox is unchecked except index
    const disabled = (index) => checkBoxes.every((checked, i) => i === index ? checked : !checked)
    return (
        <form>
            {checkBoxes.map((checked, index) => (
                <CheckBox
                    key={`checkbox-${index}`}
                    checked={checked}
                    disabled={disabled(index)}
                    handleCheckBoxChange={handleCheckBoxChange(index)}
                />
            ))}
        </form>
    );
}

export default Form;