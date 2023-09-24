'use client'

import { 
    createContext, 
    useContext, 
    useState 
} from "react"

const ColorContext = createContext()

ColorContext.displayName = 'Color' 

export function ColorProvider({ children }) {
    const [color, setColor] = useState('#6BD1FF')

        return (
            <ColorContext.Provider value={{ color, setColor }}>
                {children}
            </ColorContext.Provider>
        )
}

export function useColor() {
    return useContext(ColorContext)
}