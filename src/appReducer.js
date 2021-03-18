import { ACTIONS } from './actions'
import uuid from 'react-uuid'

const newTodo = (currentInputValue, priority, dueDate) => {
    return {
        id: uuid(),
        name: currentInputValue,
        priority: priority,
        dueDate: dueDate,
        complete: false
    }
}


const INITIAL_STATE = {
    dialogOpen: false,
    filterPriority: '',
    todos: [],
    currentInputValue: '',
    priority: 'priority',
    dueDate: 'dueDate',
};


export const reducer = (state = INITIAL_STATE, action) => {
    // console.log('inside reducer state:', state);
    // console.log('reducer action:', action);
    

    switch (action.type) {
        case ACTIONS.SET_DIALOG_OPEN_STATE:
            return { ...state, dialogOpen: action.dialogOpen, currentInputValue: action.currentInputValue, priority: action.priority, dueDate: action.dueDate }

        case ACTIONS.SET_CURRENT_INPUT_VALUE:
            // console.log('action.currentInputValue: ', action.currentInputValue);
            return { ...state, currentInputValue: action.currentInputValue || '' };

        case ACTIONS.SET_CURRENT_PRIORITY_VALUE:
            // console.log('action.priority: ', action.priority);
            return { ...state, priority: action.priority || 'Low' };

        case ACTIONS.SET_CURRENT_DUEDATE:
            // console.log('action.dueDate: ', action.dueDate); 
            return { ...state, dueDate: action.dueDate };


        case ACTIONS.ADD_TODO:
            const newTodos = Object.assign([], state.todos); // ! Pay attention that it is not a deep copy  
            // const newTodos = [...state.todos];  // ! Pay attention that it is not a deep copy
            if (state.currentInputValue !== '') {
                newTodos.push(newTodo(state.currentInputValue, state.priority, state.dueDate));
                state.dialogOpen = false
                return { ...state, todos: newTodos }; // * new state
            }break; 
     
        case ACTIONS.DONE_TODO:
            // debugger;
            const newTodos2 = [...state.todos];
            var updetTodo = newTodos2.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            })
            return { ...state, todos: updetTodo };

        case ACTIONS.DELETE_TODO:
            const newTodos3 = state.todos.filter(todo => todo.id !== action.payload.id);
            return { ...state, todos: newTodos3 };
            
        default:
            return state;

    }
}
