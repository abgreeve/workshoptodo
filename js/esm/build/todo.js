import{useEffect as f,useState as b}from"react";import*as a from"@moodle/lms/block_workshoptodo/repository";import w from"@moodle/lms/block_workshoptodo/todolist";import{jsx as d,jsxs as s}from"react/jsx-runtime";/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todo
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */const T=({rootid:t})=>{const[l,m]=b([]),e=async()=>{m(await a.getTodos())};f(()=>{e()},[]);const c=async(o,n)=>{await a.updateTodo({...o,completed:n}),await e()},p=async o=>{await a.deleteTodo(o),await e()},u=async o=>{o.preventDefault();const r=o.currentTarget.elements.text,i=r.value.trim();i!==""&&(await a.createTodo(i),r.value="",await e())};return s("div",{id:t,className:"block-workshoptodo-app",children:[d(w,{todos:l,rootid:t,onDelete:p,onToggle:c}),s("form",{"data-region":"add-todo-form",onSubmit:o=>void u(o),children:[d("label",{className:"visually-hidden",htmlFor:`new-todo-${t}`,children:"New todo"}),s("div",{className:"input-group",children:[d("input",{className:"form-control",id:`new-todo-${t}`,name:"text",type:"text",placeholder:"New todo",required:!0}),d("button",{className:"btn btn-primary",type:"submit",children:"Add"})]})]})]})};var v=T;export{v as default};
