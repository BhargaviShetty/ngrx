import * as TodoActions from '../actions/todo.actions';
import { Todo } from '../model/todo.model';

const initialState: Todo = {
    task: 'Cooking',
    text: 'cook dinner'
}

export function simpleReducer(
    state: Todo[] = [initialState],
    action: TodoActions.Actions
){
    switch(action.type){
        case TodoActions.ADD:
            return [...state,action.payload];
        case TodoActions.REMOVE:
            let newState = state.slice(0,action.payload);
            let newSt = state.slice(action.payload+1, state.length);
            let finalState = [...newState, ...newSt]
            return finalState
        default:
            return state
    }
}