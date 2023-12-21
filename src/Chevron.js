import React from 'react';

const Chevron = ({ color }) =>
    <div className="chevronChart__chevron">
        <div className="chevronChart__chevronPartTop" style={{ backgroundColor: color }} />
        <div className="chevronChart__chevronPartBottom" style={{ backgroundColor: color }} />
    </div>

export default Chevron;