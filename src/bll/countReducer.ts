import {APIservice, CounterSettingsType} from "../api/api";
import {Dispatch} from "redux";

export const SET_INITIAL_DATA = "CounterV3.1/CountReducer/SET_INITIAL_DATA"
export const UPDATE_MAX_VALUE = "CounterV3.1/CountReducer/UPDATE_MAX_VALUE"
export const UPDATE_START_VALUE = "CounterV3.1/CountReducer/UPDATE_START_VALUE"


let initialState = {
    memoryValue: 4,
    startValue: 3,
    maxValue: 7,
    isSetSettingMode: false
}

type initialStateType = typeof initialState


type ActionType = any | SetInitialDataSuccessType|UpdateMaxValueSuccessType|UpdateStartValueSuccessType

export const reducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_INITIAL_DATA:
            debugger
            return {...state, ...action.InitData};
        case UPDATE_MAX_VALUE:
            return {...state, maxValue:action.maxValue};

            case UPDATE_START_VALUE:
            return {...state, maxValue:action.maxValue};
        default:
            return state
    }

}

type SetInitialDataSuccessType = {
    type: typeof SET_INITIAL_DATA
    InitData: CounterSettingsType
}

type UpdateMaxValueSuccessType={
    type: typeof UPDATE_MAX_VALUE
    maxValue: number
}

type UpdateStartValueSuccessType={
    type: typeof UPDATE_START_VALUE
    startValue: number
}

////AC
// export const setCounterValue=(value:number)=>{type:'fs', value}

export const setInitialDataSuccess = (InitData: CounterSettingsType) => ({type: SET_INITIAL_DATA, InitData})
export const updateMaxValueSuccess = (maxValue: number) => ({type: UPDATE_MAX_VALUE, maxValue})
export const updateStartValueSuccess = (startValue: number) => ({type: UPDATE_START_VALUE, startValue})


////TC
export const GetInitialData = () => {
    return (dispatch: Dispatch<ActionType>) => {
        APIservice.getCounterSetting()
            .then(data => {
                debugger
                dispatch(setInitialDataSuccess(data))
            })

    }
}


export const UpdateMaxValue = (val: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        APIservice.updateCounterMaxValue(val)
            .then(data => {
                debugger
                dispatch(updateMaxValueSuccess(data.maxValue))
            })

    }
}
export const UpdateStartValue = (val: number) => {
    return (dispatch: Dispatch<ActionType>) => {
        APIservice.updateCounterStartValue(val)
            .then(data => {
                debugger
                dispatch(updateStartValueSuccess(data.startValue))
            })

    }
}



