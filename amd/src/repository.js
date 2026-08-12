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

const todos = [
    {id: 1, text: 'Read the workshop introduction', completed: false},
    {id: 2, text: 'Try the AMD todo block', completed: false},
    {id: 3, text: 'Discuss the next frontend migration', completed: false},
];
let nextId = 4;

const copyTodo = (todo) => ({...todo});

/**
 * Get all todos without exposing the internal array.
 *
 * @returns {Promise<Array>}
 */
export const getTodos = async() => todos.map(copyTodo);

/**
 * Create a todo.
 *
 * @param {String} text
 * @returns {Promise<Object>}
 */
export const createTodo = async(text) => {
    const todo = {id: nextId++, text, completed: false};
    todos.push(todo);
    return copyTodo(todo);
};

/**
 * Update a todo.
 *
 * @param {Object} todo
 * @returns {Promise<Object|null>}
 */
export const updateTodo = async(todo) => {
    const index = todos.findIndex((existingTodo) => existingTodo.id === todo.id);

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
export const deleteTodo = async(id) => {
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
        return false;
    }

    todos.splice(index, 1);
    return true;
};
