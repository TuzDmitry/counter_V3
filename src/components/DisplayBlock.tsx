import React from "react";
import ComponentInstaller from "./ComponentInstaller";

const DisplayBlock=()=>{
    return(
        <div className={`display`}>
    {/*{settingMode &&*/}
    <>
        <ComponentInstaller
        //     nameInstaller={"max value:"}
        // value={maxV}
        // onChangeFunc={this.onChangeValueMax}
        // classRed={classRedForMaxValue}
        />
    <ComponentInstaller
        // nameInstaller={"start value:"}
        // value={minV}
        // onChangeFunc={this.onChangeValueMin}
        // classRed={classRedForMinValue}
    />
    </>
    {/*}*/}

    {/*{!settingMode && <span className={`numb ${classRedForDisplay}`}>{memo}</span>}*/}
    </div>
    )
}


export default DisplayBlock