import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
// import TodoItem from './TodoItem';
import { data } from 'autoprefixer';
import UserDataFetcher from './UserDataFetcher';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
=======
import UserDataFetcher from './UserDataFetcher';
>>>>>>> 1ba59b46408ab01c8afc2eafa9e186e47b91ea26

function App() {
<<<<<<< HEAD
const [todos, setTodos]=useState(()=> {
  //   {id: 1,text: "Belajar React State",completed:  true},
  //   {id: 2, text: "Membuat Proyek Todo", completed: true},
  //   {id: 3, text: "Riset Challenge P16", completed: true},
// ]);
//   const [todos, setTodos] = useState (() => {
//     const dataTersimpan = localStorage.getItem('todos');
//     if (dataTersimpan) {
//     return JSON.parse(dataTersimpan);
//   } else {
//     return [];
//   }
});

const [inputText, setInputText] = useState("");
useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
const handleSubmit = (event) => {
//     event.preventDefault();

//     if (inputText.trim()==="") {
//       alert("Tugas tidak boleh kosong!");
//       return;// Berhenti di sini
//     }
//       const todoBaru = {
//         id: Date.now(), // ID unik sederhana pakai timestamp
//         text: inputText,
//         completed: false
};
//       setTodos([...todos, todoBaru]);
//       setInputText("");
//   };
const deleteTodo = (id) => {
//     const todosBaru = todos.filter(todo => todo.id !== id);
//     setTodos(todosBaru);
};

const toggleComplete = (id) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? {...todo, completed: !todo.completed} : todo
//       )
//     );
};
=======
  // Initialize todos from localStorage or use empty array
  const [todos, setTodos] = useState(() => {
    const dataTersimpan = localStorage.getItem('todos');
    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    } else {
      return [];
    }
  });

  const [inputText, setInputText] = useState("");

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Handle form submission to add new todo
  const handleSubmit = (event) => {
    event.preventDefault();
>>>>>>> 1ba59b46408ab01c8afc2eafa9e186e47b91ea26

    if (inputText.trim() === "") {
      alert("Tugas tidak boleh kosong!");
      return; // Berhenti di sini
    }

    const todoBaru = {
      id: Date.now(), // ID unik sederhana pakai timestamp
      text: inputText,
      completed: false
    };

    setTodos([...todos, todoBaru]);
    setInputText("");
  };

  // Delete a todo by id
  const deleteTodo = (id) => {
    const todosBaru = todos.filter(todo => todo.id !== id);
    setTodos(todosBaru);
  };

  // Toggle completed status
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      {/* User Data Section */}
      <div className="mb-8">
        <UserDataFetcher />
      </div>

      {/* Todo List Section - Hidden */}
      {/* <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-400">My Todo List</h1>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
          <input
            type="text"
            placeholder="Tambahkan tugas baru..."
            className="flex-grow p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Tambah
          </button>
        </form>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors"
            >
              <span
                className={todo.completed ? "text-lg line-through text-gray-500 cursor-pointer" : "text-lg cursor-pointer"}
                onClick={() => toggleComplete(todo.id)}
              >
                {todo.text}
              </span>
              <button
                className="text-red-500 hover:text-red-700 font-semibold transition-colors"
                onClick={() => deleteTodo(todo.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            Tidak ada tugas. Tambahkan tugas baru di atas!
          </p>
        )}
      </div> */}
    </div>
  );
}

export default App;