import React from 'react';

type ButtonPropsType={
    name:string
    callBack:()=>void
}

export const Button = (props:ButtonPropsType) => {
    const callBackHandler = () => {
        props.callBack()

    }
    return (

            <button onClick={callBackHandler}>{props.name}</button>

    );
};

