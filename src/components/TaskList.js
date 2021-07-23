import React from 'react';
import TaskCard from './TaskCard';

const TaskList = (props) => {
    
    const taskCards = props.tasks.map(( task, index) => 
    <TaskCard key={ index } task={ task }/>)

    return (
        <div>
            <h2>(user's) Tasks</h2>
            
            { taskCards }
        </div>
    )
}

export default TaskList
