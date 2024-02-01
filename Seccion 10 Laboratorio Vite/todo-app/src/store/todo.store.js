import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending:  'Pending',
}

const state = {
    todos: [
        new Todo('Pidedra del alma'),
        new  Todo('Piedra del poder'),
        new  Todo('Piedra del tiempo'),
    ], 
    filter: Filters.All
}


const initStore= ()=> {
    console.log (state);
    console.log ("store initialized");
}


export default {
    initStore,
}