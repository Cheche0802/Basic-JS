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
        new  Todo('Piedra del espacio'),
        new  Todo('Piedra del realidad'),
    ], 
    filter: Filters.All
}


const initStore= ()=> {
    console.log (state);
    console.log ("store initialized");
}

const  loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = (filter =  Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
        default:
            throw new Error(`Option ${filter} is not valid.`);
            break;
    }
}

/**
 * @params {String} descriptions
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');

    state.todos.push(new Todo(description));
}

const toggleTodo = (todoId) => {
  state.todos = state.todos.map(todo => {
    if(todo.id === todoId) {
        todo.done = !todo.done
    }
    return todo;
  });
}

const deleteTodo = (todoid) => {
    state.todos = state.todos.filter(todo => todo.id != todoid)
}

const deleteComplete = () => {
    state.todos = state.todos.filter(todo => todo.done)
}


const setFilter= (newFilter =  Filters.All) => {

   state.filter = newFilter;
}

const getCurrentFilter = () => {
   return state.filter
}


export default {
    getTodos,
    initStore,
    loadStore,
    addTodo,
    toggleTodo, 
    deleteTodo, 
    deleteComplete,
    setFilter,
    getCurrentFilter
}