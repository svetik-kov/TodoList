import {TasksStateType} from "../App";
import {v1} from "uuid";


type TasksReducerType=
    removeTasksACType
    |addTaskACType
    |changeTaskStatusACType
      ;
type removeTasksACType=ReturnType<typeof removeTaskAC>
type addTaskACType=ReturnType<typeof addTaskAC>
type changeTaskStatusACType=ReturnType<typeof changeTaskStatusAC>



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
       case "CHANGE-TASKS":{
           return {...state,[action.payload.todolistId]:
           state[action.payload.todolistId].map(el=>el.id===action.payload.id
               ?{...el,isDone:action.payload.isDone}:el)}
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
      type:'CHANGE-TASKS',
        payload:{id, isDone, todolistId}
    }as const
}