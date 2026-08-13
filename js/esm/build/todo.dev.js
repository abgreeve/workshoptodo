var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { jsxDEV } from "react/jsx-dev-runtime";
/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todo
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
import { useEffect, useState } from "react";
import * as Repository from "@moodle/lms/block_workshoptodo/repository";
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
        fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
        lineNumber: 28,
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
        fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
        lineNumber: 37,
        columnNumber: 21
      }
    )
  ] }, void 0, true, {
    fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
    lineNumber: 27,
    columnNumber: 17
  }),
  /* @__PURE__ */ jsxDEV("button", { className: "btn btn-outline-danger btn-sm", type: "button", onClick: () => void onDelete(todo.id), children: "Delete" }, void 0, false, {
    fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
    lineNumber: 44,
    columnNumber: 17
  })
] }, void 0, true, {
  fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
  lineNumber: 26,
  columnNumber: 13
})) }, void 0, false, {
  fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
  lineNumber: 24,
  columnNumber: 5
}), "TodoList");
const TodoApp = /* @__PURE__ */ __name(({ rootid }) => {
  const [todos, setTodos] = useState([]);
  const loadTodos = /* @__PURE__ */ __name(async () => {
    setTodos(await Repository.getTodos());
  }, "loadTodos");
  useEffect(() => {
    void loadTodos();
  }, []);
  const handleToggle = /* @__PURE__ */ __name(async (todo, completed) => {
    await Repository.updateTodo({ ...todo, completed });
    await loadTodos();
  }, "handleToggle");
  const handleDelete = /* @__PURE__ */ __name(async (id) => {
    await Repository.deleteTodo(id);
    await loadTodos();
  }, "handleDelete");
  const handleFormSubmit = /* @__PURE__ */ __name(async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.text;
    const text = input.value.trim();
    if (text === "") {
      return;
    }
    await Repository.createTodo(text);
    input.value = "";
    await loadTodos();
  }, "handleFormSubmit");
  return /* @__PURE__ */ jsxDEV("div", { id: rootid, className: "block-workshoptodo-app", children: [
    /* @__PURE__ */ jsxDEV(TodoList, { todos, rootid, onDelete: handleDelete, onToggle: handleToggle }, void 0, false, {
      fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
      lineNumber: 91,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("form", { "data-region": "add-todo-form", onSubmit: (event) => void handleFormSubmit(event), children: [
      /* @__PURE__ */ jsxDEV("label", { className: "visually-hidden", htmlFor: `new-todo-${rootid}`, children: "New todo" }, void 0, false, {
        fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
        lineNumber: 93,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "input-group", children: [
        /* @__PURE__ */ jsxDEV("input", { className: "form-control", id: `new-todo-${rootid}`, name: "text", type: "text", placeholder: "New todo", required: true }, void 0, false, {
          fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
          lineNumber: 95,
          columnNumber: 21
        }),
        /* @__PURE__ */ jsxDEV("button", { className: "btn btn-primary", type: "submit", children: "Add" }, void 0, false, {
          fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
          lineNumber: 96,
          columnNumber: 21
        })
      ] }, void 0, true, {
        fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
        lineNumber: 94,
        columnNumber: 17
      })
    ] }, void 0, true, {
      fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
      lineNumber: 92,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "public/blocks/workshoptodo/js/esm/src/todo.tsx",
    lineNumber: 90,
    columnNumber: 9
  });
}, "TodoApp");
var todo_default = TodoApp;
export {
  todo_default as default
};
//# sourceMappingURL=todo.dev.js.map
