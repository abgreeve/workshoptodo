import{useEffect as b,useState as f}from"react";import*as a from"@moodle/lms/block_workshoptodo/repository";import T from"@moodle/lms/block_workshoptodo/todolist";import{jsx as d,jsxs as n}from"react/jsx-runtime";/**
 * Render and interact with the workshop todo list.
 *
 * @module     block_workshoptodo/todo
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */const w=({rootid:t})=>{const[l,m]=f([]),e=async()=>{m(await a.getTodos())};b(()=>{e()},[]);const p=async(o,s)=>{await a.updateTodo({...o,completed:s}),await e()},c=async o=>{await a.deleteTodo(o),await e()},u=async o=>{o.preventDefault();const r=o.currentTarget.elements.text,i=r.value.trim();i!==""&&(await a.createTodo(i),r.value="",await e())};return n("div",{id:t,className:"block-workshoptodo-app",children:[d(T,{todos:l,rootid:t,onDelete:c,onToggle:p}),n("form",{"data-region":"add-todo-form",onSubmit:o=>void u(o),children:[d("label",{className:"visually-hidden",htmlFor:`new-todo-${t}`,children:"New todo"}),n("div",{className:"input-group",children:[d("input",{className:"form-control",id:`new-todo-${t}`,name:"text",type:"text",placeholder:"New todo",required:!0}),d("button",{className:"btn btn-primary",type:"submit",children:"Add"})]})]})]})};var v=w;export{v as default};
