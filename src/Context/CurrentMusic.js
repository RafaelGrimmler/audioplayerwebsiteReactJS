import React, { useContext, useState } from "react";

const CurrentMusicContext = React.createContext()

export function useCurrentMusic(){
    return useContext(CurrentMusicContext)
}

export function CurrentMusicProvider({ children }){

    const [musicName, setMusicName] = useState(null)
    const [playing, setPlaying] = useState(false)

    return(
        <CurrentMusicContext.Provider
            value={{
                musicName,
                setMusicName,
                playing, 
                setPlaying
            }}
        >
            {children}
        </CurrentMusicContext.Provider>
    )

}