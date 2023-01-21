import {useState,useEffect,createContext} from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks,setTasks]= useState([])
    useEffect(()=>{setTasks(data)},[])

    function grabarTarea(title,description) {
        let idFinal=0
        if (tasks.length===0){
            idFinal=1
        }
        else{
            idFinal=tasks.slice(tasks.length-1)[0].id+1
        }
        setTasks([...tasks,{
            "id": idFinal,
            "title": title,
            "description": description
        }])
        
      }
    
      function deleteTask(id){
        setTasks(tasks.filter((task)=>task.id!==id))
      }

    return (
        <TaskContext.Provider value={{tasks: tasks,grabarTarea: grabarTarea,deleteTask: deleteTask}}>
            {props.children}
        </TaskContext.Provider>
    )
}
