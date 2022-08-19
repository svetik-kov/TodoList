import {TasksStateType} from "../App";
import {v1} from "uuid";


type TasksReducerType=
    removeTasksACType
    |addTaskACType
    |changeTaskStatusACType
    |changeTaskTitleACType
      ;
type removeTasksACType=ReturnType<typeof removeTaskAC>
type addTaskACType=ReturnType<typeof addTaskAC>
type changeTaskStatusACType=ReturnType<typeof changeTaskStatusAC>
type changeTaskTitleACType=ReturnType<typeof changeTaskTitleAC>


export const tasksReducer=(state:TasksStateType,action:TasksReducerType):TasksStateType=>{
   switch (action.type) {
       case 'REMOVE-TASKS':{
           return {...state,
               [action.payload.todolistId]
                   :state[action.payload.todolistId].filter(el=>el.id!==action.payload.id)}
       }
       case "ADD-TASK":{
           let newTask = {id: v1(), title: action.payload.title, isDone: false};
           return {...state,
               [action.payload.todolistId]:
           [newTask,...state[action.payload.todolistId]]}
       }
       case 'CHANGE-TASKS-STATUS':{
           return {...state,[action.payload.todolistId]:
           state[action.payload.todolistId].map(el=>el.id===action.payload.id
               ?{...el,isDone:action.payload.isDone}:el)}
       }
       case "CHANGE-TASKS-TITLE":{
           return {...state,[action.payload.todolistId]:
           state[action.payload.todolistId].map(el=>el.id===action.payload.id?
               {...el,title:action.payload.newTitle}:el)}
       }
       default: return state
   }
}

export const removeTaskAC=(id: string, todolistId: string)=>{
    return{
        type:'REMOVE-TASKS',
        payload: {id, todolistId}
    }as const
}
export const addTaskAC=(title: string, todolistId: string)=>{
    return{
        type:'ADD-TASK',
        payload:{title, todolistId}

    }as const
}
export const changeTaskStatusAC=(id: string, isDone: boolean, todolistId: string)=>{
    return{
      type:'CHANGE-TASKS-STATUS',
        payload:{id, isDone, todolistId}
    }as const
}
export const changeTaskTitleAC=(id: string, newTitle: string, todolistId: string)=>{
    return {
        type:'CHANGE-TASKS-TITLE',
        payload: {id, newTitle, todolistId}
    }as const
}