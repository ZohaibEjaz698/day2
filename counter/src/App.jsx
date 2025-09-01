import { useState } from "react"

const App = () => {
  const [count,setCount] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center h-[400px] w-[400px] bg-slate-900 rounded-2xl">
      <h1 className="text-3xl font-bold text-white">Counter App</h1>
      <p className="text-2xl text-white mb-6">Count: {count}</p>
      <div className="flex gap-6">
      <button onClick={() => setCount(count + 1)} className="bg-[#fd7000] transition-colors duration-300 ease-in-out hover:bg-black hover:text-white text-white px-2 py-1 rounded cursor-pointer">Increment</button>
      <button onClick={() => setCount(count - 1)} className="bg-[#fd7000] transition-colors duration-300 ease-in-out hover:bg-black hover:text-white text-white px-2 py-1 rounded cursor-pointer">Decrement</button>
      <button onClick={() => setCount(0)} className="bg-[#fd7000] transition-colors duration-300 ease-in-out hover:bg-black hover:text-white text-white px-2 py-1 rounded cursor-pointer">Reset</button>
      </div>
    </div>
  )
}

export default App