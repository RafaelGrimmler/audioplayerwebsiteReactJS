import React, { useContext, useState, useEffect } from "react";

const ReproductionContext = React.createContext()

export function useReproduction(){
    return useContext(ReproductionContext)
}

export function ReproductionProvider({ children }){

    // localStorage.setItem("nomes", JSON.stringify(nomes))
    // console.log(JSON.parse(localStorage.getItem("nomes")))

    const [ tracks, setTracks ] = useState(JSON.parse(localStorage.getItem("tracks")) || [])
    const [ changeStage, setChangeStage ] = useState(false)

    function addTrack( track ){
        setTracks(tracks => [...tracks, track])
        setChangeStage(true)
    }

    function clearTracks(){
        setTracks([])
        setChangeStage(true)
        localStorage.setItem("tracks", JSON.stringify([]))
    }

    function getTracks(){
        return JSON.parse(localStorage.getItem("tracks"))
    }

    function removeTrack(){
        setTracks()
        setChangeStage(true)
    }

    useEffect(()=>{
        if(changeStage === true){
            localStorage.setItem("tracks", JSON.stringify(tracks))
            setChangeStage(false)
        }
    }, [tracks])
    
    return(
        <ReproductionContext.Provider
            value={{
                addTrack,
                getTracks,
                clearTracks
            }}
        >
            {children}
        </ReproductionContext.Provider>
    )

}