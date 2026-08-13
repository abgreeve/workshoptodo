import{requireAsync as l}from"@moodle/lms/core/amd";import*as s from"@moodle/lms/block_workshoptodo/repository";/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todo
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */const c=async t=>{const o=await l("core/templates"),a=await s.getTodos(),r=await o.renderForPromise("block_workshoptodo/todo",{todos:a});o.replaceNodeContents(t,r.html,r.js),t.querySelectorAll('[data-action="toggle"]').forEach(e=>{e.addEventListener("change",async()=>{const d=Number(e.dataset.todoId),n=a.find(i=>i.id===d);await s.updateTodo({...n,completed:e.checked}),await c(t)})}),t.querySelectorAll('[data-action="delete"]').forEach(e=>{e.addEventListener("click",async()=>{await s.deleteTodo(Number(e.dataset.todoId)),await c(t)})})},m=async t=>{const o=document.querySelector(t.selector),a=o.querySelector(".workshop-todo"),r=o.querySelector('[data-region="add-todo-form"]');r.addEventListener("submit",async e=>{e.preventDefault();const d=r.elements.text,n=d.value.trim();n!==""&&(await s.createTodo(n),d.value="",await c(a))}),c(a)};var p=m;export{p as default,m as init};
