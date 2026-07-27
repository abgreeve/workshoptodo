/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todo
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['core/templates', 'block_workshoptodo/repository'], function(Templates, Repository) {
    'use strict';

    /**
     * Render the current todos and attach handlers to the new markup.
     *
     * @param {HTMLElement} root
     * @returns {Promise<void>}
     */
    const render = async function(root) {
        const todos = await Repository.getTodos();
        const result = await Templates.renderForPromise('block_workshoptodo/todo', {
            todos: todos,
            rootid: root.id,
        });

        Templates.replaceNodeContents(root, result.html, result.js);

        const form = root.querySelector('[data-region="add-todo-form"]');
        form.addEventListener('submit', async function(event) {
            event.preventDefault();

            const input = form.elements.text;
            const text = input.value.trim();
            if (text === '') {
                return;
            }

            await Repository.createTodo(text);
            await render(root);
        });

        root.querySelectorAll('[data-action="toggle"]').forEach(function(checkbox) {
            checkbox.addEventListener('change', async function() {
                const id = Number(checkbox.dataset.todoId);
                const todo = todos.find(function(currentTodo) {
                    return currentTodo.id === id;
                });

                await Repository.updateTodo({...todo, completed: checkbox.checked});
                await render(root);
            });
        });

        root.querySelectorAll('[data-action="delete"]').forEach(function(button) {
            button.addEventListener('click', async function() {
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
    const init = async function(selector) {
        const root = document.querySelector(selector);

        window.console.log(selector);
        window.console.log(root);

        render(root);

    };

    return {
        init: init,
    };
});
