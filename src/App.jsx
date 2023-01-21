import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <main className='bg-zinc-700 h-screen'>
      <div className='container-fluid p-8'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App