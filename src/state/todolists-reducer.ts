import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type TodolistReducerType=removeTodolistACType
    |addTodolistACType
    |changeTodolistTitleAC
    |changeFilterACType;
type removeTodolistACType=ReturnType<typeof removeTodolistAC>
type addTodolistACType=ReturnType<typeof addTodolistAC>
type changeTodolistTitleAC=ReturnType<typeof changeTodolistTitleAC>
type changeFilterACType=ReturnType<typeof changeFilterAC>

export const todolistsReducer=(state:Array<TodolistType>,action:TodolistReducerType)=>{
   switch (action.type) {
       case 'REMOVE-TODOLIST':{
           return state.filter(el=>el.id!==action.id)
       }
       case "ADD-TODOLIST":{
           let newTodolist: TodolistType = {id: v1(), title:action.title, filter: 'all'};
           return [...state,newTodolist]
       }
       case "CHANGE-TODOLIST-TITLE":{
           return state.map(el=>el.id===action.id?{...el, title:action.title}:el)
       }
       case "CHANGE-TODOLIST-FILTER":{
           return state.map(el=>el.id===action.id?{...el,filter:action.filter}:el)
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
export const changeTodolistTitleAC=(todolistId2: string, newTodolistTitle: string)=>{
    return{
        type: 'CHANGE-TODOLIST-TITLE',
        id: todolistId2,
        title: newTodolistTitle
    }as const
}
export const changeFilterAC=(todolistId2: string,newFilter: FilterValuesType)=>{
    return{
        type: 'CHANGE-TODOLIST-FILTER',
        id: todolistId2,
        filter: newFilter
    }as const
}