import { createContext, useRef } from "react";

export const PlaterContext = createContext();

const PlayerContextProvider =(props)=>{

    const audioRef = useRef();
    const contextValue={
        audioRef

    }

    return (
        <PlaterContext.Provider value={contextValue}>
            {props.children}
        </PlaterContext.Provider>
    )
}

export default PlayerContextProvider