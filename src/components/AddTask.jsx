import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };
    const handleAddtaskClick = () =>{
        handleTaskAddition(inputData)
        setInputData("");
    }

    return ( 
        <div className="add-task-conteiner">
            <input 
                onChange={handleInputChange} 
                value={inputData}
                className="add-task-input" 
                type="text"
            />
            <div className="add-task-button-conteiner">
                <Button onClik={handleAddtaskClick}>Adicionar</Button>
            </div>
        </div>
        );
}
 
export default AddTask;