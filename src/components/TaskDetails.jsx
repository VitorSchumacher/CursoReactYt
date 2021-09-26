import React from 'react';
import { useHistory, useParams } from 'react-router';

import Button from './Button';
import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
    return ( 
        <>
            <div className="back-button-conteiner">
                <Button onClik={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-conteiner">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reiciendis dicta, quibusdam quod, dolor et omnis inventore perferendis quisquam qui ea aspernatur ex illo laboriosam aut possimus nostrum consequatur ipsa!
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;