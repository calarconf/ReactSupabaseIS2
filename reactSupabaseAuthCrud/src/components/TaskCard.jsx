import React from 'react'
import { useTasks } from '../context/TaskContext'

function TaskCard({ task }) {

    const { deleteTask, updateTask } = useTasks();

    const handleDelete = () => {
        deleteTask(task.id);
    }
    const handleToggleDone = () => {
        updateTask(task.id, { done: !task.done })

    }
    const handleEdit = () => {
        alert('Edit')
    }

    return (
        <div className='history-card card-body mb-3'>
            <h1 className='h5'>
                {`${task.id}.  ${task.name}`}
            </h1>
            <p style={{ fontSize: '40px' }}>
                {task.done ? "✔️" : "❌"}
            </p>
            <div style={{ justifyContent: 'center', gap: '20px' }} className='ms-auto'>
                <button className='btn btn-danger btn-sm me-1' onClick={() => handleDelete()}>Delete</button>
                <button className='btn btn-danger btn-sm me-1' onClick={() => handleToggleDone()}>Done</button>
                {/* <button className='btn btn-danger btn-sm me-1' onClick={() => handleEdit()}>Edit</button> */}
            </div>
        </div>
    )
}

export default TaskCard