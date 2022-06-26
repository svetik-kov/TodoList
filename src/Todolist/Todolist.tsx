import React from 'react';
import {FilterValueType} from "../App";

type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    removeTasks:(tasksID:number)=>void
    changeFilter:(value:FilterValueType)=>void
}
type TasksPropsType = {
    id: number,
    title: string,
    isDone: boolean
}
export const Todolist = (props: TodolistPropsType) => {


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {

                    return (
                        <li key={el.id}>
                            <button onClick={()=>props.removeTasks(el.id)}>X</button>
                            <input type='checkbox' checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>props.changeFilter('all')}>All</button>
                <button onClick={()=>props.changeFilter('active')}>Active</button>
                <button onClick={()=>props.changeFilter('completed')}>Completed</button>
            </div>

        </div>
    );
};

