import {APIservice, CounterSettingsType} from "../api/api";
import {Dispatch} from "redux";
import {AppRootState} from "./store";

export const SET_INITIAL_DATA = "CounterV3.1/CountReducer/SET_INITIAL_DATA"
export const UPDATE_MAX_VALUE = "CounterV3.1/CountReducer/UPDATE_MAX_VALUE"
export const UPDATE_START_VALUE = "CounterV3.1/CountReducer/UPDATE_START_VALUE"
export const UPDATE_MEMORY_VALUE = "CounterV3.1/CountReducer/UPDATE_MEMORY_VALUE"
export const TOGGLE_MODE = "CounterV3.1/CountReducer/TOGGLE_MODE"


let initialState = {
    memoryValue: 0,
    startValue: 0,
    maxValue: 1,
    isSetSettingMode: false
}

type initialStateType = typeof initialState


type ActionType =
    any
    | SetInitialDataSuccessType
    | UpdateMaxValueSuccessType
    | UpdateStartValueSuccessType
    | UpdateMemoryValueSuccessType
    | ToggleModeType

export const reducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_INITIAL_DATA:
            return {...state, ...action.InitData};
        case UPDATE_MAX_VALUE:
            return {...state, maxValue: action.maxValue};

        case UPDATE_START_VALUE:
            return {...state, startValue: action.startValue};

        case UPDATE_MEMORY_VALUE:
            return {...state, memoryValue: action.memoryValue};

        case TOGGLE_MODE:
            return {...state, isSetSettingMode: action.settingMode};
        default:
            return state
    }

}

type SetInitialDataSuccessType = {
    type: typeof SET_INITIAL_DATA
    InitData: CounterSettingsType
}

type UpdateMaxValueSuccessType = {
    type: typeof UPDATE_MAX_VALUE
    maxValue: number
}

type UpdateStartValueSuccessType = {
    type: typeof UPDATE_START_VALUE
    startValue: number
}

type UpdateMemoryValueSuccessType = {
    type: typeof UPDATE_MEMORY_VALUE
    memoryValue: number
}

type ToggleModeType = {
    type: typeof TOGGLE_MODE
    settingMode: boolean
}

////AC
// export const setCounterValue=(value:number)=>{type:'fs', value}

export const setInitialDataSuccess = (InitData: CounterSettingsType) => ({type: SET_INITIAL_DATA, InitData})
export const updateMaxValueSuccess = (maxValue: number) => ({type: UPDATE_MAX_VALUE, maxValue})
export const updateStartValueSuccess = (startValue: number) => ({type: UPDATE_START_VALUE, startValue})
export const updateMemoryValueSuccess = (memoryValue: number) => ({type: UPDATE_MEMORY_VALUE, memoryValue})

export const toggleMode = (settingMode: boolean) => ({type: TOGGLE_MODE, settingMode})


////TC
export const GetInitialData = () => {
    return async (dispatch: Dispatch<ActionType>) => {
        let data = await APIservice.getCounterSetting()
        dispatch(setInitialDataSuccess(data))
    }
}


export const UpdateMaxValue = (val: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        let data = await APIservice.updateCounterMaxValue(val)
        dispatch(updateMaxValueSuccess(data.maxValue))
    }
}
export const UpdateStartValue = (val: number) => {
    return async (dispatch: Dispatch<ActionType>) => {
        let data = await APIservice.updateCounterStartValue(val)
        dispatch(updateStartValueSuccess(data.startValue))
    }
}

export const toggleModeThunk = (val: boolean) => {
    return async (dispatch: Dispatch<ActionType>, getState: () => AppRootState) => {
        if (!val) {
            let data = await APIservice.updateCounterMemoryValue(getState().counterReducer.startValue)
            dispatch(updateMemoryValueSuccess(data.memoryValue))
            dispatch(toggleMode(val))
        } else {
            dispatch(toggleMode(val))
        }

    }
}


export const incrementMemoryValue = () => {
    return async (dispatch: Dispatch<ActionType>, getState: () => AppRootState) => {

        let newVal: number = getState().counterReducer.memoryValue + 1
        let maxVal: number = getState().counterReducer.maxValue

        if (newVal <= maxVal) {
            let data = await APIservice.updateCounterMemoryValue(newVal)
            dispatch(updateMemoryValueSuccess(data.memoryValue))
        }
    }
}

// export const resetMemoryValue=()=>{
//     return (dispatch:Dispatch<ActionType>, getState:()=>AppRootState)=>{
//
//         let startValue:number=getState().counterReducer.startValue
//         APIservice.updateCounterMemoryValue(startValue)
//             .then(data=>{
//                 dispatch(updateMemoryValueSuccess(data.memoryValue))
//             })
//     }
// }

export const resetMemoryValue = () => {
    return async (dispatch: Dispatch<ActionType>, getState: () => AppRootState) => {
        let startValue: number = getState().counterReducer.startValue

        let data = await APIservice.updateCounterMemoryValue(startValue)
        dispatch(updateMemoryValueSuccess(data.memoryValue))

    }
}


