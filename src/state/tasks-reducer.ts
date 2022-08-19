import {TasksStateType} from "../App";
import {v1} from "uuid";


type TasksReducerType=
    removeTasksACType
    |addTaskACType
      ;
type removeTasksACType=ReturnType<typeof removeTaskAC>
type addTaskACType=ReturnType<typeof addTaskAC>



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
