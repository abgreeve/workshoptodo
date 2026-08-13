var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsxDEV } from "react/jsx-dev-runtime";
/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todolist
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
const TodoList = /* @__PURE__ */ __name(({ todos, rootid, onDelete, onToggle }) => /* @__PURE__ */ jsxDEV("ul", { className: "list-group mb-3 workshop-todo", "aria-label": "Todo list", children: todos.map((todo) => /* @__PURE__ */ jsxDEV("li", { className: "list-group-item d-flex align-items-center justify-content-between", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "form-check mb-0", children: [
    /* @__PURE__ */ jsxDEV(
      "input",
      {
        className: "form-check-input",
        type: "checkbox",
        id: `todo-${rootid}-${todo.id}`,
        "data-action": "toggle",
        "data-todo-id": todo.id,
        checked: todo.completed,
        onChange: (event) => void onToggle(todo, event.target.checked)
      },
      void 0,
      false,
      {
        fileName: "public/blocks/workshoptodo/js/esm/src/todolist.tsx",
        lineNumber: 21,
        columnNumber: 21
      }
    ),
    /* @__PURE__ */ jsxDEV(
      "label",
      {
        className: `form-check-label ${todo.completed ? "text-decoration-line-through" : ""}`,
        htmlFor: `todo-${rootid}-${todo.id}`,
        children: todo.text
      },
      void 0,
      false,
      {
        fileName: "public/blocks/workshoptodo/js/esm/src/todolist.tsx",
        lineNumber: 30,
        columnNumber: 21
      }
    )
  ] }, void 0, true, {
    fileName: "public/blocks/workshoptodo/js/esm/src/todolist.tsx",
    lineNumber: 20,
    columnNumber: 17
  }),
  /* @__PURE__ */ jsxDEV("button", { className: "btn btn-outline-danger btn-sm", type: "button", onClick: () => void onDelete(todo.id), children: "Delete" }, void 0, false, {
    fileName: "public/blocks/workshoptodo/js/esm/src/todolist.tsx",
    lineNumber: 37,
    columnNumber: 17
  })
] }, void 0, true, {
  fileName: "public/blocks/workshoptodo/js/esm/src/todolist.tsx",
  lineNumber: 19,
  columnNumber: 13
})) }, void 0, false, {
  fileName: "public/blocks/workshoptodo/js/esm/src/todolist.tsx",
  lineNumber: 17,
  columnNumber: 5
}), "TodoList");
var todolist_default = TodoList;
export {
  todolist_default as default
};
//# sourceMappingURL=todolist.dev.js.map
