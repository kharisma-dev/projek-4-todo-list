import React, { useState } from 'react';
import TodoItem from './TodoItem';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
function App() {
  const [todos, setTodos]=useState([
    {id: 1,text: "Belajar React State",completed:  true},
    {id: 2, text: "Membuat Proyek Todo", completed: true},
    {id: 3, text: "Riset Challenge P16", completed: true},
  ]);

  const [inputText, setInputText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputText.trim()==="") {
      alert("Tugas tidak boleh kosong!");
      return;// Berhenti di sini
    }
      const todoBaru = {
        id: Date.now(), // ID unik sederhana pakai timestamp
        text: inputText,
        completed: false
      };
      setTodos([...todos, todoBaru]);
      setInputText("");
  };
  const deleteTodo = (id) => {
    const todosBaru = todos.filter(todo => todo.id !== id);
    setTodos(todosBaru);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  return(
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-400">My Todo List</h1>
      <form onSubmit={handleSubmit} className="flex-gap-2 mb-8">
        <input
        type="text"
        placeholder="Tambahkan tugas baru..."
        className="flex-grow p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        />
        <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg">Tambah</button>
      </form>
      <ul className="space-y-3">
        {todos.map((todo)=>(
          <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onDelete={deleteTodo}
          onToggle={toggleComplete}/>
          // <li
          // key={todo.id}
          // className="flex-justify-between items-center bg-gray-800 p-4 rounded-lg">
          //   <span className={ todo.completed ? "text-lg line-through text-gray-500" : "text-lg" }>{todo.text}</span>
          //   <button className="text-red-500 hover:text-red-700">Hapus</button>
          // </li>
        ))}
        {/* <li className="flex-justify-between items-center bf-gray-800 p-4 rounded-lg">
          <span className="text-lg">Contoh:Belajar React </span>
          <button className="text-red-500 hover:text-red-700">Hapus</button>
        </li>
        <li className="flex-justify-between items-center bg-gray-800 p-4 rounded-lg">
          <span className="text-lg line-through text-gray-500">Contoh:Sudah Selesai </span>
          <button className="text-red-500 hover:text-red-700">Hapus</button>"
        </li> */}
      </ul>
      </div>
    </div> 
  )
}
export default App