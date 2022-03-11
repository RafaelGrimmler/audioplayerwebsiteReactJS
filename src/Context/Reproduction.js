import React, { useContext, useState, useEffect } from "react";

const ReproductionContext = React.createContext()

export function useReproduction(){
    return useContext(ReproductionContext)
}

export function ReproductionProvider({ children }){

    const [ tracks, setTracks ] = useState(JSON.parse(localStorage.getItem("tracks")) || [])
    const [ changeStage, setChangeStage ] = useState(false)
    const [ key, setKey ] = useState(JSON.parse(localStorage.getItem("key")) || 1)
    const [ indexReproduction, setIndexReproduction ] = useState(0)

    function addTrack( track ){
        track = {...track, ...{key: key}}
        setTracks(tracks => [...tracks, track])
        setChangeStage(true)
    }

    function clearTracks(){
        setTracks([])
        setKey(1)
        setChangeStage(true)
        localStorage.setItem("tracks", JSON.stringify([]))
    }

    function getTracks(){
        return JSON.parse(localStorage.getItem("tracks"))
    }

    function removeTrack(trackKey){
        let i = 0;
        let tracksAux = []
        while(i < tracks.length){
            if(tracks[i].key !== trackKey){
                tracksAux.push(tracks[i])
            }
            i++
        }
        setTracks(tracksAux)
        setChangeStage(true)
    }

    function changeReproductionIndex(){
        if(indexReproduction + 1 === tracks.length){
            setIndexReproduction(0)
            return tracks[0]
        }
        setIndexReproduction(indexReproduction + 1)
        return tracks[indexReproduction + 1]
    }

    useEffect(()=>{
        if(changeStage === true){
            localStorage.setItem("tracks", JSON.stringify(tracks))
            localStorage.setItem("key", JSON.stringify(key))
            console.log(tracks)
            setKey(key + 1)
            setChangeStage(false)
        }
    }, [tracks])

    return(
        <ReproductionContext.Provider
            value={{
                addTrack,
                getTracks,
                clearTracks,
                removeTrack,
                changeReproductionIndex
            }}
        >
            {children}
        </ReproductionContext.Provider>
    )
}