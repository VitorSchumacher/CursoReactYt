import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import {useHistory} from 'react-router-dom';

import './Task.css';

const Task = ({task, handleTaskClick, handTaskDeletion}) => {
    const history = useHistory();

    const handleTaskDatailsClik = () =>{
        history.push(`/${task.title}`);
    }
    return(

        <div 
            className="task-conteiner"
            style={task.completed ? {borderLeft: "6px solid chartreuse"} : {} }
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-conteiner">
                <button 
                    className="see-task-datails-button" 
                    onClick={handleTaskDatailsClik}
                >
                    <CgInfo/>
                </button>
                <button 
                    onClick={() => handTaskDeletion(task.id)}
                    className="remove-task-button" 
                >
                    <CgClose/>
                </button>
            </div>
        </div>
    );
}
 
export default Task;