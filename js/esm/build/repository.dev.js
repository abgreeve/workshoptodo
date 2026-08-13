var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
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
  { id: 1, text: "Read the workshop introduction", completed: false },
  { id: 2, text: "Try the AMD todo block", completed: false },
  { id: 3, text: "Discuss the next frontend migration", completed: false }
];
let nextId = 4;
const copyTodo = /* @__PURE__ */ __name((todo) => ({ ...todo }), "copyTodo");
const getTodos = /* @__PURE__ */ __name(async () => todos.map(copyTodo), "getTodos");
const createTodo = /* @__PURE__ */ __name(async (text) => {
  const todo = { id: nextId++, text, completed: false };
  todos.push(todo);
  return copyTodo(todo);
}, "createTodo");
const updateTodo = /* @__PURE__ */ __name(async (todo) => {
  const index = todos.findIndex((existingTodo) => existingTodo.id === todo.id);
  if (index === -1) {
    return null;
  }
  todos[index] = copyTodo(todo);
  return copyTodo(todos[index]);
}, "updateTodo");
const deleteTodo = /* @__PURE__ */ __name(async (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return false;
  }
  todos.splice(index, 1);
  return true;
}, "deleteTodo");
export {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo
};
//# sourceMappingURL=repository.dev.js.map
