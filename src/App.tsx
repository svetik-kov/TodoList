import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Todolist} from "./Todolist/Todolist";
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {

    let [tasks1, setTasks] = useState([
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false}
        ]
    )
    let [filterValue, setFilterValue] = useState<FilterValueType>('all')
    let filteredTasks = tasks1
    if (filterValue === 'active') {
        filteredTasks = tasks1.filter(el => el.isDone === true)
    }
    if (filterValue === 'completed') {
        filteredTasks = tasks1.filter(el => el.isDone === false)
    }
    const removeTasks = (tasksID: string) => {
        tasks1 = tasks1.filter((el) => el.id !== tasksID)
        setTasks(tasks1)
    }
    /* let filteredTasks = tasks1.filter(el => el.isDone === true)*/
    const changeFilter = (value: FilterValueType) => {
        setFilterValue(value)
    }
    const addTasks = (newTitle:string) => {
        const NewTasks = {id: v1(), title: newTitle, isDone: true}
        tasks1 = [NewTasks, ...tasks1]
        setTasks(tasks1)
    }
    return (
        <div className='App'>
            <Todolist
                title={'What to learn111'}
                tasks={filteredTasks}
                removeTasks={removeTasks}
                changeFilter={changeFilter}
                addTasks={addTasks}
            />

        </div>
    )
}

export default App;
