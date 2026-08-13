/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todolist
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

type TodoListProps = {
    todos: Todo[];
    rootid: string;
    onDelete: (id: number) => Promise<void>;
    onToggle: (todo: Todo, completed: boolean) => Promise<void>;
};

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

export default TodoList;
