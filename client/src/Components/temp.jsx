import React from 'react';
import { useLocation } from "react-router-dom";

const Temp = () => {
    const loc = useLocation()
    return (
        <div>
            hello this is a temp component {loc.pathname}
        </div>
    );
}

export default Temp;
