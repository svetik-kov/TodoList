import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Simulate} from "react-dom/test-utils";

type EditTableSpanPropsType={
    title:string
    callBack:(newTitle:string)=>void
}
export const EditTableSpan = (props:EditTableSpanPropsType) => {
   const [edit,setEdit]=useState(false)
    let [newTitle, setNewTitle] = useState(props.title)



const changeEditHandler=()=>{
    setEdit(!edit)
}
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
        addTask()
    }

    const addTask = () => {
        let newTitlenew = newTitle.trim();
        if (newTitlenew !== "") {
            props.callBack(newTitle/*, props.id*/);
            // setNewTitle("");
        }
    }
   /* const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }*/
    return (
        edit
        ? <input autoFocus onBlur={changeEditHandler} value={newTitle} onChange={onChangeHandler}/>
       : <span onDoubleClick={changeEditHandler}>{props.title}</span>
    );
};

