import React from 'react'

const TaskCard = (props) => {
    return (
        <div>
           <h4>{props.task.name}</h4>
        </div>
    )
}

export default TaskCard
