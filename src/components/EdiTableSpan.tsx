import React, {ChangeEvent, useState} from 'react';

type EdiTableSpanPropsType = {
    title: string
    callBack:(newTitle:string)=>void
}
export const EdiTableSpan = (props: EdiTableSpanPropsType) => {
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState("")
    const addTask = () => {

        if (newTitle !== "") {
            props.callBack(newTitle);
          /*  setTitle("");*/
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const changeEditHandler = () => {
      /*  setEdit(true)*/
        setEdit(!edit)
        addTask()
    }
    return (
        edit
            ? <input onChange={onChangeHandler} autoFocus onBlur={changeEditHandler} value={newTitle}/>
            : <span onDoubleClick={changeEditHandler}>{props.title}</span>
    );
};

