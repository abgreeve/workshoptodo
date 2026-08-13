import{jsx as o,jsxs as l}from"react/jsx-runtime";/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todolist
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */const c=({todos:i,rootid:t,onDelete:a,onToggle:d})=>o("ul",{className:"list-group mb-3 workshop-todo","aria-label":"Todo list",children:i.map(e=>l("li",{className:"list-group-item d-flex align-items-center justify-content-between",children:[l("div",{className:"form-check mb-0",children:[o("input",{className:"form-check-input",type:"checkbox",id:`todo-${t}-${e.id}`,"data-action":"toggle","data-todo-id":e.id,checked:e.completed,onChange:s=>void d(e,s.target.checked)}),o("label",{className:`form-check-label ${e.completed?"text-decoration-line-through":""}`,htmlFor:`todo-${t}-${e.id}`,children:e.text})]}),o("button",{className:"btn btn-outline-danger btn-sm",type:"button",onClick:()=>void a(e.id),children:"Delete"})]}))});var n=c;export{n as default};
