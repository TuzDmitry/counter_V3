import React, {ChangeEvent} from 'react';


type OwnPropsType = {
    nameInstaller: string
    value: number
    onChangeFunc: (val:number) => void
    classRed:string
}


const ComponentInstaller = (props: OwnPropsType) => {
    let a = (e: ChangeEvent<HTMLInputElement>) => {
            debugger
           let val=parseInt(e.currentTarget.value)
        props.onChangeFunc(val)
    }

    return (
        <div className="containerValue">

            <div>
                {props.nameInstaller}
            </div>
            <input type="number"
                   value={props.value}
                   onChange={a}
                className={props.classRed}
            />
        </div>
    );

}

export default ComponentInstaller;