import {Todo} from '../models/todo.model'
import { createTodoHTML } from './create-todo-html';

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */

let element;

export const renderTodos =  (elementId, todos = []) => { 

    //Todo referencia
    if (!element)
        element =document.querySelector(elementId);
    
    if (!element) throw new Error(`Elemnt ${elementId} not found`);

    element.innerHTML = ''; 
    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
        
    });

}