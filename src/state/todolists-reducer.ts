import {TodolistType} from "../App";
import {v1} from "uuid";

type TodolistReducerType=removeTodolistACType|addTodolistACType
type removeTodolistACType=ReturnType<typeof removeTodolistAC>
type addTodolistACType=ReturnType<typeof addTodolistAC>

export const todolistsReducer=(state:Array<TodolistType>,action:TodolistReducerType)=>{
   switch (action.type) {
       case 'REMOVE-TODOLIST':{
           return state.filter(el=>el.id!==action.id)
       }
       case "ADD-TODOLIST":{
           let newTodolist: TodolistType = {id: v1(), title:action.title, filter: 'all'};
           return [...state,newTodolist]
       }
       default: return state
   }
}

export const removeTodolistAC=(todolistId1: string)=>{
    return{
        type:'REMOVE-TODOLIST',
        id: todolistId1
    }as const
}
export const addTodolistAC=(newTodolistTitle:string)=>{
    return {
        type: 'ADD-TODOLIST',
        title: newTodolistTitle
    }as const
}