import {TodolistType} from "../App";

type TodolistReducerType=removeTodolistACType
type removeTodolistACType=ReturnType<typeof removeTodolistAC>


export const todolistsReducer=(state:Array<TodolistType>,action:TodolistReducerType)=>{
   switch (action.type) {
       case 'REMOVE-TODOLIST':{
           return state.filter(el=>el.id!==action.id)
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