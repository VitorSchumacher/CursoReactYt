import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handTaskDeletion}) => {
    return (
        <> 
            {tasks.map((task) => (
            <Task
                key={task.id}
                task={task} 
                handleTaskClick={handleTaskClick} 
                handTaskDeletion={handTaskDeletion}
            />
            ))} 
        </>
    );
};
export default Tasks;
