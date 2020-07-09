import React from "react";
import ComponentInstaller from "./ComponentInstaller";
import {connect, useDispatch} from "react-redux";
import {AppRootState} from "../bll/store";
import {UpdateMaxValue, UpdateStartValue} from "../bll/countReducer";


type MapStateToPropsType = {
    startValue: number
    maxValue: number
    isSetSettingMode: boolean
    memoryValue:number
}


const DisplayBlock = (props: MapStateToPropsType) => {
    let {maxValue, startValue, memoryValue, isSetSettingMode: settingMode} = props

    const dispatch = useDispatch()

    let onChangeValueMin = (curVal: number) => {
        dispatch(UpdateStartValue(curVal))

    }
    let onChangeValueMax = (curVal: number) => {
        dispatch(UpdateMaxValue(curVal))
    }


    let classRedForMaxValue = (maxValue <= startValue || maxValue < 0) ? "input-red" : "";
    let classRedForMinValue = (maxValue <= startValue || startValue < 0) ? "input-red" : "";
    let classRedForDisplay = (maxValue===memoryValue) ? "filter-red" : "";



    return (
        <div className={`display`}>
            {settingMode &&
            <>
                <ComponentInstaller
                    nameInstaller={"max value:"}
                    value={props.maxValue}
                    onChangeFunc={onChangeValueMax}
                    classRed={classRedForMaxValue}
                />
                <ComponentInstaller
                    nameInstaller={"start value:"}
                    value={props.startValue}
                    onChangeFunc={onChangeValueMin}
                    classRed={classRedForMinValue}
                />
            </>
            }

            {!settingMode && <span
                className={`numb ${classRedForDisplay}`}
            >{memoryValue}</span>}
        </div>
    )
}


const mstp = (state: AppRootState): MapStateToPropsType => {
    return {
        startValue: state.counterReducer.startValue,
        maxValue: state.counterReducer.maxValue,
        isSetSettingMode: state.counterReducer.isSetSettingMode,
        memoryValue: state.counterReducer.memoryValue
    }
}

export default connect<MapStateToPropsType, {}, {}, AppRootState>(mstp, {})(DisplayBlock)