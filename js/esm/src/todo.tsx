/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todo
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {useEffect, useState} from 'react';
import * as Repository from '@moodle/lms/block_workshoptodo/repository';

type TodoListProps = {
    todos: Todo[];
    rootid: string;
    onDelete: (id: number) => Promise<void>;
    onToggle: (todo: Todo, completed: boolean) => Promise<void>;
};

type Props = {
    rootid: string;
}

const TodoList = ({todos, rootid, onDelete, onToggle}: TodoListProps) => (
    <ul className="list-group mb-3 workshop-todo" aria-label="Todo list">
        {todos.map((todo) => (
            <li className="list-group-item d-flex align-items-center justify-content-between">
                <div className="form-check mb-0">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={`todo-${rootid}-${todo.id}`}
                        data-action="toggle"
                        data-todo-id={todo.id}
                        checked={todo.completed}
                        onChange={(event) => void onToggle(todo, event.target.checked)}
                    />
                    <label
                        className={`form-check-label ${todo.completed ? 'text-decoration-line-through' : ''}`}
                        htmlFor={`todo-${rootid}-${todo.id}`}
                    >
                        {todo.text}
                    </label>
                </div>
                <button className="btn btn-outline-danger btn-sm" type="button" onClick={() => void onDelete(todo.id)}>
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

const TodoApp = ({rootid}: Props) => {
    const [todos, setTodos] = useState([]);

    const loadTodos = async () => {
        setTodos(await Repository.getTodos());
    };

    useEffect(() => {
        void loadTodos();
    }, []);

    const handleToggle = async(todo: Todo, completed: boolean) => {
        await Repository.updateTodo({...todo, completed});
        await loadTodos();
    };

    const handleDelete = async(id: number) => {
        await Repository.deleteTodo(id);
        await loadTodos();
    };

    const handleFormSubmit = async(event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const input = form.elements.text;
        const text = input.value.trim();

        if (text === '') {
            return;
        }

        await Repository.createTodo(text);
        input.value = '';
        await loadTodos();
    };

    return (
        <div id={rootid} className="block-workshoptodo-app">
            <TodoList todos={todos} rootid={rootid} onDelete={handleDelete} onToggle={handleToggle} />
            <form data-region="add-todo-form" onSubmit={(event) => void handleFormSubmit(event)}>
                <label className="visually-hidden" htmlFor={`new-todo-${rootid}`}>New todo</label>
                <div className="input-group">
                    <input className="form-control" id={`new-todo-${rootid}`} name="text" type="text" placeholder="New todo" required />
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </form>
        </div>
    );
};

export default TodoApp;
