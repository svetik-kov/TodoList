import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import s from './Todolist.module.css'
import {CheckBox} from "./components/CheckBox";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    chengeCheckbox:(id:string,value:boolean)=>void
    filter:FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
const [error,setError]=useState<string|null>(null)
    const addTask = () => {
        if (title.trim()!==''){
            props.addTask(title.trim());
            setTitle("");
        } else { setError('This is required')}
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }
    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");
    const chengeCheckboxHandler=(tID:string,eventValue:boolean)=>{
        props.chengeCheckbox(tID,eventValue)
    }
    const onClickHandler = (tId:string) => {
        props.removeTask(tId)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ?s.error:''} value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <button onClick={addTask}>+</button>
            {error && <div className={s.errorMessage}> {error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                   /* const onClickHandler = () => props.removeTask(t.id)*/

                    return <li key={t.id} className={t.isDone?s.isDone:''}>
                        <CheckBox checked={t.isDone} callback={(eventValue)=>chengeCheckboxHandler(t.id,eventValue)}/>
                       {/* <input type="checkbox" checked={t.isDone} onChange={(event)=>chengeCheckboxHandler(t.id,event.currentTarget.checked)}/>*/}
                        <span>{t.title}</span>
                        <button onClick={ ()=>onClickHandler(t.id) }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter==='all'? s.activeFilter:''} onClick={ onAllClickHandler }>All</button>
            <button className={props.filter==='active' ?s.activeFilter:''} onClick={ onActiveClickHandler }>Active</button>
            <button className={props.filter==='completed'? s.activeFilter:''} onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
