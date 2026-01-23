function TodoItem({ id, text, completed, onDelete, onToggle}) {
    return (
        <li className="flex-justify-between items-center bg-gray-800 p-4 rounded-lg">
            <span className={ `text-lg ${completed ? "line-through text-gray-900" :""} cursor-pointer hover:opacity-80`} onClick={()=> onToggle(id)}>{text}</span>
            <button onClick={() => onDelete(id)} className="text-red-500 hover:text-red-700">Hapus</button>
        </li>
    );
}

export default TodoItem;
