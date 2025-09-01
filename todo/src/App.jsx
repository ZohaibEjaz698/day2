import { useState } from "react"

const App = () => {
  const [task, setTask] = useState([])
  const [newTasks, setNewTasks] = useState('')
  
  const addTask = () => {
    if(newTasks.trim() !== ""){
      setTask(t => [...t, newTasks])
      setNewTasks('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Todo List</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        {/* Add Task Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex gap-3">
            <input 
              className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200" 
              type="text" 
              placeholder="What needs to be done?"
              value={newTasks} 
              onChange={(e) => setNewTasks(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-105" 
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {task.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-xl">No tasks yet!</p>
              <p className="text-sm">Add your first task above to get started.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {task.map((t, i) => (
                <li key={i} className="p-4 hover:bg-gray-50 transition-colors duration-150">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-800 font-medium">{t}</span>
                    </div>
                    <button 
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md" 
                      onClick={() => setTask(task.filter((_, index) => index !== i))}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Task Counter */}
        {task.length > 0 && (
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {task.length} {task.length === 1 ? 'task' : 'tasks'} remaining
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App