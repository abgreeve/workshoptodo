var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todo
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
import { requireAsync } from "@moodle/lms/core/amd";
import * as Repository from "@moodle/lms/block_workshoptodo/repository";
const render = /* @__PURE__ */ __name(async (root) => {
  const Templates = await requireAsync("core/templates");
  const todos = await Repository.getTodos();
  const result = await Templates.renderForPromise("block_workshoptodo/todo", {
    todos
  });
  Templates.replaceNodeContents(root, result.html, result.js);
  root.querySelectorAll('[data-action="toggle"]').forEach((checkbox) => {
    checkbox.addEventListener("change", async () => {
      const id = Number(checkbox.dataset.todoId);
      const todo = todos.find((currentTodo) => currentTodo.id === id);
      await Repository.updateTodo({ ...todo, completed: checkbox.checked });
      await render(root);
    });
  });
  root.querySelectorAll('[data-action="delete"]').forEach((button) => {
    button.addEventListener("click", async () => {
      await Repository.deleteTodo(Number(button.dataset.todoId));
      await render(root);
    });
  });
}, "render");
const init = /* @__PURE__ */ __name(async (props) => {
  const container = document.querySelector(props.selector);
  const root = container.querySelector(".workshop-todo");
  const form = container.querySelector('[data-region="add-todo-form"]');
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = form.elements.text;
    const text = input.value.trim();
    if (text === "") {
      return;
    }
    await Repository.createTodo(text);
    input.value = "";
    await render(root);
  });
  void render(root);
}, "init");
var todo_default = init;
export {
  todo_default as default,
  init
};
//# sourceMappingURL=todo.dev.js.map
