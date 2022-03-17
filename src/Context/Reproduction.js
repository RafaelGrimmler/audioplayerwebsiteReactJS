import { isInaccessible } from "@testing-library/react";
import React, { useContext, useState, useEffect } from "react";

const ReproductionContext = React.createContext()

export function useReproduction(){
    return useContext(ReproductionContext)
}

export function ReproductionProvider({ children }){

    const [ tracks, setTracks ] = useState(JSON.parse(localStorage.getItem("tracks")) || [])
    const [ changeStage, setChangeStage ] = useState(false)
    const [ key, setKey ] = useState((JSON.parse(localStorage.getItem("key")) + 2) || 1)
    const [ indexReproduction, setIndexReproduction ] = useState(0)

    function addTrack( track ){
        track = {...track, ...{key: key}}
        setTracks(tracks => [...tracks, track])
        setChangeStage(true)
    }

    function clearTracks(){
        setTracks([])
        setKey(0)
        setChangeStage(true)
        setIndexReproduction(0)
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
        if(indexReproduction + 1 >= tracks.length){
            return undefined
        }
        setIndexReproduction(indexReproduction + 1)
        return tracks[indexReproduction + 1]
    }

    function changeReproductionIndexPrevious(){
        if(indexReproduction - 1 <= 0){
            setIndexReproduction(0)
            return tracks[0]
        }
        setIndexReproduction(indexReproduction - 1)
        return tracks[indexReproduction - 1]
    }

    function changeReproductionIndexByPlay(trackKey){
        let i = 0;
        while(i < tracks.length){
            if(tracks[i].key === trackKey){
                setIndexReproduction(i)
                break
            }
            i++
        }
    }

    function changeReproductionIndexByRemove(trackKey){
        let i = 0;
        while(i < tracks.length){
            if(tracks[i].key === trackKey){
                if(tracks[i + 1]){
                    return tracks[i + 1]
                }
                else {
                    if(i === tracks.length - 1 && i === 0){
                        setIndexReproduction(0)
                        return undefined
                    }
                    else{
                        if(i === tracks.length - 1){
                            setIndexReproduction(i - 1)
                            return tracks[i - 1]
                        }
                    }
                }
            }
            i++
        }
        return null
    }

    useEffect(()=>{
        if(changeStage === true){
            localStorage.setItem("tracks", JSON.stringify(tracks))
            localStorage.setItem("key", JSON.stringify(key))
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
                changeReproductionIndex,
                setIndexReproduction,
                changeReproductionIndexByPlay,
                changeReproductionIndexByRemove,changeReproductionIndexPrevious
            }}
        >
            {children}
        </ReproductionContext.Provider>
    )
}