/**
 * The todo application's in-memory data layer.
 *
 * The functions are asynchronous so this module can later be replaced with
 * web service calls without changing the user interface.
 *
 * @module     block_workshoptodo/repository
 * @copyright  2026 Moodle
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */const o=[{id:1,text:"Read the workshop introduction",completed:!1},{id:2,text:"Try the AMD todo block",completed:!1},{id:3,text:"Discuss the next frontend migration",completed:!1}];let s=4;const n=t=>({...t}),c=async()=>o.map(n),r=async t=>{const e={id:s++,text:t,completed:!1};return o.push(e),n(e)},i=async t=>{const e=o.findIndex(d=>d.id===t.id);return e===-1?null:(o[e]=n(t),n(o[e]))},l=async t=>{const e=o.findIndex(d=>d.id===t);return e===-1?!1:(o.splice(e,1),!0)};export{r as createTodo,l as deleteTodo,c as getTodos,i as updateTodo};
