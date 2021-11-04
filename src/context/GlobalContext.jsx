import { createContext, useEffect, useState, } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowScrollY, setWindowScrollY] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', ()=>{setWindowWidth(window.innerWidth)})
        window.addEventListener('scroll', ()=>{setWindowScrollY(window.scrollY)})

        return () => {
            window.removeEventListener('resize', ()=>{setWindowWidth(window.innerWidth)})
            window.removeEventListener('scroll', ()=>{setWindowScrollY(window.scrollY)})

        }
    }, [])
    
    return (
        <GlobalContext.Provider value={{windowWidth, windowScrollY}}>
            {children}
        </GlobalContext.Provider>
    )
}

