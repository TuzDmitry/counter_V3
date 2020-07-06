import React from "react";
import DisplayBlock from "./DisplayBlock";
import ControlPanelBlock from "./ControlBlock";


const CounterBox=(props:any)=>{
    return(
        <div className="box">
            <DisplayBlock
                // state={this.props.state}
                //      adjustValueMin={this.props.adjustValueMin}
                //      adjustValueMax={this.props.adjustValueMax}
            />

            <ControlPanelBlock
                // state={this.props.state} incCounter={this.props.incCounter}
                //           switchMode={this.props.switchMode}
                //           resetToZero={this.props.resetToZero}
            />
        </div>
    )
}

export default CounterBox;