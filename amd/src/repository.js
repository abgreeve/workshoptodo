/**
 * The todo application's in-memory data layer.
 *
 * The functions are asynchronous so this module can later be replaced with
 * web service calls without changing the user interface.
 *
 * @module     block_workshoptodo/repository
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define([], function() {
    'use strict';

    const todos = [
        {id: 1, text: 'Read the workshop introduction', completed: false},
        {id: 2, text: 'Try the AMD todo block', completed: false},
        {id: 3, text: 'Discuss the next frontend migration', completed: false},
    ];
    let nextId = 4;

    const copyTodo = function(todo) {
        return {...todo};
    };

    /**
     * Get all todos without exposing the internal array.
     *
     * @returns {Promise<Array>}
     */
    const getTodos = async function() {
        return todos.map(copyTodo);
    };

    /**
     * Create a todo.
     *
     * @param {String} text
     * @returns {Promise<Object>}
     */
    const createTodo = async function(text) {
        const todo = {id: nextId++, text: text, completed: false};
        todos.push(todo);
        return copyTodo(todo);
    };

    /**
     * Update a todo.
     *
     * @param {Object} todo
     * @returns {Promise<Object|null>}
     */
    const updateTodo = async function(todo) {
        const index = todos.findIndex(function(existingTodo) {
            return existingTodo.id === todo.id;
        });

        if (index === -1) {
            return null;
        }

        todos[index] = copyTodo(todo);
        return copyTodo(todos[index]);
    };

    /**
     * Delete a todo.
     *
     * @param {Number} id
     * @returns {Promise<Boolean>}
     */
    const deleteTodo = async function(id) {
        const index = todos.findIndex(function(todo) {
            return todo.id === id;
        });

        if (index === -1) {
            return false;
        }

        todos.splice(index, 1);
        return true;
    };

    return {
        getTodos: getTodos,
        createTodo: createTodo,
        updateTodo: updateTodo,
        deleteTodo: deleteTodo,
    };
});
