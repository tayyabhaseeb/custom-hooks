import React from "react"
import {ToggleContext} from './Menu'

export default function MenuDropdown({ children }) {
const {open} = React.useContext(ToggleContext)
     
    return (

            <div className="menu-dropdown">
                {open && children }
            </div>
    )
}