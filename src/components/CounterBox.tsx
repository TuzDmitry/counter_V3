import React, {useEffect} from "react";
import DisplayBlock from "./DisplayBlock";
import ControlPanelBlock from "./ControlBlock";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../bll/store";
import { GetInitialData } from "../bll/countReducer";


const CounterBox=()=>{
// debugger
    // const val=useSelector<AppRootState, number>(state => state.counterReducer.maxValue)

    const dispatch=useDispatch();
   useEffect(()=>{dispatch(GetInitialData())},[])

    return(
        <div className="box">
            <DisplayBlock/>

            <ControlPanelBlock
                // state={this.props.state} incCounter={this.props.incCounter}
                //           switchMode={this.props.switchMode}
                //           resetToZero={this.props.resetToZero}
            />
        </div>
    )
}

export default CounterBox;