import { useState,useContext } from "react"
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {grabarTarea}=useContext(TaskContext)
   
    return (
        <form onSubmit={(e)=>{e.preventDefault()
            grabarTarea(title,description)
            setTitle("")
            setDescription("")
        }} className="bg-gray-800 p-8 max-w-md mx-auto">
            <h1 className="text-white text-bold text-2xl mb-3">Crea tu tarea</h1>
            <input className="bg-gray-100 p-3 w-full mb-2" placeholder='Ingresa nueva tarea' onChange={(e) => { setTitle(e.target.value) }} value={title} autoFocus></input>
            <textarea className="bg-gray-100 w-full mt-0 py-2" placeholder='Describe la nueva tarea' onChange={(e) => {setDescription(e.target.value)}} value={description}></textarea>
            <button className="bg-emerald-400 py-1 mt-2 rounded-md px-4 hover:bg-emerald-200">Guardar</button>
        </form>
    )
}

export default TaskForm
