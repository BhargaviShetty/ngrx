import { Todo } from "../model/todo.model";

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

//testing jenkins
export class Add {
    readonly type = ADD
    constructor(public payload:Todo){}
}

export class Remove{
     type = REMOVE
    constructor(public payload:number){}
}

export type Actions = Add | Remove