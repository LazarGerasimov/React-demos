import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { AddTodoModal } from './components/AddTodoModal';



import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {

    const [todos, setTodos] = useState([]);
    const [showAddTodo, setShowAddTodo] = useState(false);

    useEffect(() => {
        fetch(`${baseUrl}`)
            .then(response => response.json())
            .then(result => {
                setTodos(Object.values(result));
            })
    }, []);

    const onTodoAddSubmit = async (values) => {
        // console.log(values);
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        const result = await response.json();

        console.log(result);
    };

    const onTodoAddClick = () => {
        setShowAddTodo(true);
    };

    const onTodoAddClose = () => {
        setShowAddTodo(false);
    }
 
    return (
        <>
            <Header />
            <TodoList todos={todos} onTodoAddClick={onTodoAddClick} />
            <AddTodoModal show={showAddTodo} onTodoAddSubmit={onTodoAddSubmit} onTodoAddClose={onTodoAddClose} />
        </>
    );
}

export default App;
