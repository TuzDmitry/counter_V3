import React from "react";
import Button from "./Button";

const ControlPanelBlock=(props:any)=>{
    return(
    <div className="controlPanel">
        {/*{!settingMode &&*/}
        <Button
            // setDisabled={setDisabledForInc}
            // name={'inc'}
            // onClickFunc={props.incCounter}
        />
        {/*{!settingMode &&*/}
        {/*<Button setDisabled={setDisabledForReset} name={'reset'} onClickFunc={props.resetToZero}/>}*/}

        {/*<Button name={'set'} setDisabled={setDisabledForSet} onClickFunc={props.switchMode}/>*/}
    </div>
    )
}

export default ControlPanelBlock