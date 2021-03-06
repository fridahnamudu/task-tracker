import { useState } from 'react'

const AddTask = ( {onAdd}) => {
    const [task, setTask] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!task) {
            alert('please add task')
            return
        }
        onAdd({ task, day, reminder})

        setTask('')
        setDay('')
        setReminder(false)
        
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' 
                placeholder='AddTask' 
                value={task} 
                onChange={(e) => setTask(e.target.value)}></input>
            </div>

            <div className='form-control form-control-check'>
                <label>Day $ Time</label>
                <input type='text' placeholder='Add Day and Time' value={day} onChange={(e) => setDay(e.target.value)}></input>

                
            </div>
            <div className='form-control'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                checked={reminder}
                value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>

            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>

            

        </form>
    )
}

export default AddTask
