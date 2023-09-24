import React from "react"
import useToggle from "../../hooks/useToggle"

/**
 * Challenge:
 * 1. Remove all references to Toggle in the all 4 Menu
 *    components
 * 2. import and use `useToggle()` to create new state
 *    and toggle functions so we can use those in the Menu.
 *    Call the variables "open" and "toggleOpen".
 */

const ToggleContext = React.createContext()

export default function Menu({ children, onOpen }) {
    
const [open , toggleOpen] = useToggle()


    return (
           <ToggleContext.Provider value = {{open , toggleOpen}}>
                <div className="menu">
                    {children}
                </div>
           </ToggleContext.Provider>
    )
}


export {ToggleContext}