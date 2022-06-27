import React, {ChangeEvent} from 'react';
type CheckBoxType={
    checked:boolean
    callback:(eventValue:boolean)=>void
}
export const CheckBox = (props:CheckBoxType) => {
const  onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
    props.callback(event.currentTarget.checked)
}
    return (
        <div>
            <input type="checkbox" checked={props.checked}
                   onChange={onChangeHandler}/>

        </div>
    );
};

