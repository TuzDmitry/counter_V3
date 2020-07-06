import {APIservice, CounterSettingsType} from "../api/api";
import {Dispatch} from "redux";

export const SET_INITIAL_DATA="CounterV3.1/CountReducer/SET_INITIAL_DATA"




let initialState={
    memoryValue: 4,
    startValue: 3,
    maxValue: 7,
    isSetSettingMode:false
}

type initialStateType=typeof initialState


type ActionType=any|SetInitialDataSuccessType

export const reducer=(state:initialStateType=initialState, action:ActionType)=>{
    switch (action.type) {
        case SET_INITIAL_DATA:
            return {...state,...action.InitData};
        default:
            return state
    }

}

type SetInitialDataSuccessType={
    type:typeof SET_INITIAL_DATA
    InitData:CounterSettingsType
}

////AC
// export const setCounterValue=(value:number)=>{type:'fs', value}

export const SetInitialDataSuccess=(InitData:CounterSettingsType)=>({type:SET_INITIAL_DATA, InitData})



////TC
export const TC=()=>{
    return (dispatch:Dispatch<ActionType>)=>{
        APIservice.getCounterSetting()
            .then(data=>{
                dispatch(SetInitialDataSuccess(data))
            })

    }
}