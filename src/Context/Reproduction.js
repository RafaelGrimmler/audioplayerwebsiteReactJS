import React, { useContext, useState } from "react";

const ReproductionContext = React.createContext()

export function useReproduction(){
    return useContext(ReproductionContext)
}

export function ReproductionProvider({ children }){

    // localStorage.setItem("nomes", JSON.stringify(nomes))
    // console.log(JSON.parse(localStorage.getItem("nomes")))

    const [ musics, setMusics ] = useState([])

    function addTrack( tracks ){
        setMusics(music => [...music, tracks])
        localStorage.setItem("tracks", JSON.stringify(musics))
    }

    function getTracks(){
        return JSON.parse(localStorage.getItem("tracks"))
    }

    return(
        <ReproductionContext.Provider
            value={{
                addTrack,
                getTracks
            }}
        >
            {children}
        </ReproductionContext.Provider>
    )

}