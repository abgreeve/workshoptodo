/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todo
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import Templates from 'core/templates';
import * as Repository from 'block_workshoptodo/repository';

/**
 * Render the current todos and attach handlers to the new markup.
 *
 * @param {HTMLElement} root
 * @returns {Promise<void>}
 */
const render = async(root) => {
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
 * @param {String} selector The block's unique root selector.
 * @returns {Promise<void>}
 */
export const init = async(selector) => {
    const container = document.querySelector(selector);
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

    await render(root);
};
