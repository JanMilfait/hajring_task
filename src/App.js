import './App.css';
import {useCallback, useEffect, useState} from "react";
import ChevronChart from "./ChevronChart";
import Form from "./Form";

function App() {
    const [checkBoxes, setCheckBoxes] = useState([true, false])

    useEffect(() => {
        // Add new one if last one is checked
        if (checkBoxes[checkBoxes.length - 1]) {
            setCheckBoxes((prev) => [...prev, false])
        }
    }, [checkBoxes])

    const handleCheckBoxChange = useCallback((index) => (checked) => {
        setCheckBoxes((prev) => {
            const copy = [...prev]
            copy[index] = checked
            return copy
        })
    }, [])

    return (
        <div className="app">
            <Form checkBoxes={checkBoxes} handleCheckBoxChange={handleCheckBoxChange} />
            <ChevronChart checkBoxes={checkBoxes}/>
        </div>
    );
}

export default App;
