import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export default function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext)
    return (
        <>
            {
                <div className='bg-gray-800 text-white rounded-2xl p-3'>
                    <h1>{task.id}</h1>
                    <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
                    <p className='text-gray-400'>{task.description}</p>
                    <button className='bg-orange-500 rounded-2xl w-full mt-2 hover:bg-orange-300' onClick={() => { deleteTask(task.id) }}>Borrar</button>
                </div>
            }
        </>
    )

}
