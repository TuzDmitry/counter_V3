
let initialState={
    value: 3,
    maxValue: 7
}

type initialStateType=typeof initialState


type ActionType=any

export const reducer=(state:initialStateType=initialState, action:ActionType)=>{
    switch (action.type) {
        case "rew":
            return state;
        default:
            return state
    }

}



////AC
export const setCounterValue=(value:number)=>{type:'fs', value}