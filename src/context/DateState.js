import React, { useState } from "react";
import dateContext from "./DateContext";

const DateState = (props) => {
    const [date, setdate] = useState("");
    return (
        <dateContext.Provider value={{ date, setdate }}>
            {props.children}
        </dateContext.Provider>
    )
}

export default DateState;