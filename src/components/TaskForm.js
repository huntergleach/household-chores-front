import React, { useState } from 'react'


const TaskForm = (props) => {
    const [ name, setName ] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (!name.trim()) {
            return;
          }
        // props.addTask(name)
        setName('');
    }

    const handleChange = event => {
        setName(event.target.value)
    }

        return (
            
            <form onSubmit={ handleSubmit }>
                <div>
                    <input type='text' name='add' value={ name } onChange={ handleChange } required={true}/>
                    <button type="submit">Add</button>
                </div>
            </form>
        )
    }





export default TaskForm;
