import React from "react";
import Button from "./Button";
import {connect, useDispatch} from "react-redux";
import {AppRootState} from "../bll/store";
import {toggleModeThunk, incrementMemoryValue, resetMemoryValue} from "../bll/countReducer";

type OwnPropsType = {
    settingMode: boolean
    memoryValue: number
    startValue: number
    maxValue: number
}


const ControlPanelBlock = (props: OwnPropsType) => {

    let {settingMode,startValue,maxValue,memoryValue} = props

    let dispatch=useDispatch()
    let switchMode=()=>{
        dispatch(toggleModeThunk(!props.settingMode))
    }

    let incCounter=()=>{
        dispatch(incrementMemoryValue())
    }

    let resetToStart=()=>{
        dispatch(resetMemoryValue())
    }



    return (
        <div className="controlPanel">
            {!settingMode &&
            <Button
                setDisabled={maxValue===memoryValue}
                name={'inc'}
                onClickFunc={incCounter}
            />}


            <Button name={'set'}
                setDisabled={maxValue<=startValue}
                onClickFunc={switchMode}
            />

            {!settingMode &&
            <Button
                setDisabled={startValue===memoryValue}
                name={'reset'}
                onClickFunc={resetToStart}
            />}
        </div>
    )
}


let mstp = (state: AppRootState) => {
    return {
        settingMode: state.counterReducer.isSetSettingMode,
        memoryValue: state.counterReducer.memoryValue,
        startValue: state.counterReducer.startValue,
        maxValue:state.counterReducer.maxValue
    }
}

export default connect(mstp, {})(ControlPanelBlock)