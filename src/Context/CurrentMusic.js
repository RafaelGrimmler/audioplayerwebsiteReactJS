import React, { useContext, useState } from "react";

const CurrentMusicContext = React.createContext()

export function useCurrentMusic(){
    return useContext(CurrentMusicContext)
}

export function CurrentMusicProvider({ children }){

    const [track, setTrack] = useState(null)
    const [playing, setPlaying] = useState(false)
    const [reproduction, setReproduction] = useState(false)

    return(
        <CurrentMusicContext.Provider
            value={{
                track,
                setTrack,
                playing, 
                setPlaying,
                reproduction,
                setReproduction
            }}
        >
            {children}
        </CurrentMusicContext.Provider>
    )

}