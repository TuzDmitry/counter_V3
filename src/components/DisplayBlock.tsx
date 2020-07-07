import React from "react";
import ComponentInstaller from "./ComponentInstaller";
import {connect, useDispatch} from "react-redux";
import {AppRootState} from "../bll/store";
import {UpdateMaxValue, UpdateStartValue} from "../bll/countReducer";


type MapStateToPropsType = {
    startValue: number
    maxValue: number
}


const DisplayBlock = (props: MapStateToPropsType) => {


    const dispatch=useDispatch()

    let onChangeValueMin = (curVal:number) => {
        dispatch(UpdateStartValue(curVal))

    }
    let onChangeValueMax = (curVal:number) => {
        dispatch(UpdateMaxValue(curVal))
    }


    return (
        <div className={`display`}>
            {/*{settingMode &&*/}
            <>
                <ComponentInstaller
                    nameInstaller={"max value:"}
                    value={props.maxValue}
                    onChangeFunc={onChangeValueMax}
                    // classRed={classRedForMaxValue}
                />
                <ComponentInstaller
                    nameInstaller={"start value:"}
                    value={props.startValue}
                    onChangeFunc={onChangeValueMin}
                    // classRed={classRedForMinValue}
                />
            </>
            {/*}*/}

            {/*{!settingMode && <span className={`numb ${classRedForDisplay}`}>{memo}</span>}*/}
        </div>
    )
}


const mstp = (state: AppRootState): MapStateToPropsType => {
    return {
        startValue: state.counterReducer.startValue,
        maxValue: state.counterReducer.maxValue,
    }
}

export default connect<MapStateToPropsType, {}, {}, AppRootState>(mstp, {})(DisplayBlock)