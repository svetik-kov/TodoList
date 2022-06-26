import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {FilterValueType} from "../App";

type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    removeTasks:(tasksID:string)=>void
    changeFilter:(value:FilterValueType)=>void
    addTasks:(newTitle:string)=>void
}
type TasksPropsType = {
    id: string,
    title: string,
    isDone: boolean
}
export const Todolist = (props: TodolistPropsType) => {
    let [newTitle,setNewTitle]=useState('')

const addTasksHandler = () => {
    props.addTasks(newTitle)
    setNewTitle('')
}
const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value)
  }
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key==='Enter'){
            addTasksHandler()
        }    }
    const tsarChangeFilter=(value:FilterValueType)=>{
        props.changeFilter(value)
    }
    const removeTasksHandler=(tasksID:string)=>{
        props.removeTasks(tasksID)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addTasksHandler}>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {

                    return (
                        <li key={el.id}>
                            <button onClick={()=>removeTasksHandler(el.id)}>X</button>
                            <input type='checkbox' checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>tsarChangeFilter('all')}>All</button>
                <button onClick={()=>tsarChangeFilter('active')}>Active</button>
                <button onClick={()=>tsarChangeFilter('completed')}>Completed</button>
            </div>

        </div>
    );
};

