import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Todolist} from "./Todolist/Todolist";

export type FilterValueType= 'all'| 'active'| 'completed'
function App() {

    /*
    const tasks1 = [
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "ReactJS", isDone: false }
        ]
    */
    let [tasks1, setTasks] = useState([
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "ReactJS", isDone: false}
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
    const removeTasks = (tasksID: number) => {
        tasks1 = tasks1.filter((el) => el.id !== tasksID)
        setTasks(tasks1)
    }
    /* let filteredTasks = tasks1.filter(el => el.isDone === true)*/
    const changeFilter = (value:FilterValueType) => {
        setFilterValue(value)
    }

    return (
        <div className='App'>
            <Todolist
                title={'What to learn111'}
                tasks={filteredTasks}
                removeTasks={removeTasks}
                changeFilter={changeFilter}
            />

        </div>
    )
}

export default App;
