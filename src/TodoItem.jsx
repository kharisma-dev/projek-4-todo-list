function TodoItem({ text, completed}) {
    return (
        <li className="flex-justify-between items-center bg-gray-800 p-4 rounded-lg">
            <span className={ completed ? "text-lg line-through text-gray-900" : "text-lg" }>{text}</span>
            <button className="text-red-500 hover:text-red-700">Hapus</button>
        </li>
    );
}

export default TodoItem;
