import React, { useContext } from "react";

const ReproductionContext = React.createContext()

export function useReproduction(){
    return useContext(ReproductionContext)
}

export function ReproductionProvider({ children }){

    

    return(
        <ReproductionContext.Provider
            value={{}}
        >
            {children}
        </ReproductionContext.Provider>
    )

}