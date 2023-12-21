import React from 'react';
import Chevron from "./Chevron";

const ChevronChart = ({checkBoxes}) => {
    // Filter out unchecked checkboxes to keep colors consistent
    const onlyChecked = checkBoxes.filter((item) => item)
    return (
        <div className="chevronChart">
            {onlyChecked.map((checked, index) => {
                const color = `rgba(0, 0, 0, ${1 - index / onlyChecked.length})`
                return checked ? <Chevron key={`chevron-${index}`} color={color} /> : null
            })}
        </div>
    );
}

export default ChevronChart;