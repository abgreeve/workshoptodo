/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todo
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import {requireAsync} from '@moodle/lms/core/amd';
import * as Repository from '@moodle/lms/block_workshoptodo/repository';


const TodoList = ({todos, rootid}) => (
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
                    />
                    <label
                        className={`form-check-label ${todo.completed ? 'text-decoration-line-through' : ''}`}
                        htmlFor={`todo-${rootid}-${todo.id}`}
                    >
                        {todo.text}
                    </label>
                </div>
                <button className="btn btn-outline-danger btn-sm" type="button" data-action="delete" data-todo-id={todo.id}>
                    Delete
                </button>
            </li>
        ))}
    </ul>
);

const TodoApp = ({todos, rootid}) => (
    <div id={rootid} className="block-workshoptodo-app">
        <TodoList todos={todos} rootid={rootid} />
        <form data-region="add-todo-form">
            <label className="visually-hidden" htmlFor={`new-todo-${rootid}`}>New todo</label>
            <div className="input-group">
                <input className="form-control" id={`new-todo-${rootid}`} name="text" type="text" placeholder="New todo" required />
                <button className="btn btn-primary" type="submit">Add</button>
            </div>
        </form>
    </div>
);

/**
 * Render the current todos and attach handlers to the new markup.
 *
 * @param {HTMLElement} root
 * @returns {Promise<void>}
 */
const render = async(root) => {
    const Templates = await requireAsync('core/templates');
    const todos = await Repository.getTodos();
    const result = await Templates.renderForPromise('block_workshoptodo/todo', {
        todos,
    });

    Templates.replaceNodeContents(root, result.html, result.js);

    root.querySelectorAll('[data-action="toggle"]').forEach((checkbox) => {
        checkbox.addEventListener('change', async() => {
            const id = Number(checkbox.dataset.todoId);
            const todo = todos.find((currentTodo) => currentTodo.id === id);

            await Repository.updateTodo({...todo, completed: checkbox.checked});
            await render(root);
        });
    });

    root.querySelectorAll('[data-action="delete"]').forEach((button) => {
        button.addEventListener('click', async() => {
            await Repository.deleteTodo(Number(button.dataset.todoId));
            await render(root);
        });
    });
};

/**
 * Start a todo block instance.
 *
 * @param {Array} props Contains the block's unique root selector.
 * @returns {Promise<void>}
 */
export const init = async(props) => {
    const container = document.querySelector(props.selector);
    const root = container.querySelector('.workshop-todo');
    const form = container.querySelector('[data-region="add-todo-form"]');

    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const input = form.elements.text;
        const text = input.value.trim();
        if (text === '') {
            return;
        }

        await Repository.createTodo(text);
        input.value = '';
        await render(root);
    });

    void render(root);
};

export default init;
