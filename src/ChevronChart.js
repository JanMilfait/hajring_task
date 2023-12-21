import React from 'react';
import Chevron from "./Chevron";

const ChevronChart = ({checkBoxes}) =>
    <div className="chevronChart">
        {checkBoxes.map((checked, index) => {
            const color = `rgba(0, 0, 0, ${1 - index / checkBoxes.length})`
            return checked ? <Chevron key={`chevron-${index}`} color={color} /> : null
        })}
    </div>

export default ChevronChart;