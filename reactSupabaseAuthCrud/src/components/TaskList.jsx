import React from 'react'
import { useTasks } from '../context/TaskContext';
import { useEffect } from 'react';
import TaskCard from './TaskCard';


function TaskList({done = false}) {
    const {tasks, getTasks, loading} = useTasks();

    useEffect(() =>{
        getTasks(done);
    }, [done]);

    function renderTasks(){
        if(loading){
            return <h1>Cargando...</h1>
        }else if(tasks.length === 0){
            return <h1>No hay recolectas</h1>
        
        }else{
            return (
                <div>
                    {
                        tasks.map(task =>(
                            <TaskCard key={task.id} task={task}/>
                        ))
                    }
        
                </div>
            )
        }
    }
    return <div>
        {renderTasks()}
    </div>
    
}

export default TaskList