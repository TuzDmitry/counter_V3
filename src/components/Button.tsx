import React from 'react';
import style from './Button.module.css'


type OwnPropsType={
    name:string
    onClickFunc?:()=>void
    setDisabled:boolean
}

const Button = (props:OwnPropsType) => {
    return (
        <span>
                <button
                    onClick={props.onClickFunc}
                    disabled={props.setDisabled}
                    className={`${style.buttonClass}`}>
                    {props.name}
                </button>
            </span>
    );

}

export default Button;