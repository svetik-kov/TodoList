import {TasksStateType} from "../App";


type TasksReducerType=
    removeTasksACType
      ;
type removeTasksACType=ReturnType<typeof removeTaskAC>



export const tasksReducer=(state:TasksStateType,action:TasksReducerType):TasksStateType=>{
   switch (action.type) {
       case 'REMOVE-TASKS':{
           return {...state,
               [action.payload.todolistId]
                   :state[action.payload.todolistId].filter(el=>el.id!==action.payload.id)}
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

