import React from "react"
import Button from "../Button/Button"
import {ToggleContext} from './Menu'


export default function MenuButton({ children }) {
    
    const {toggleOpen} = React.useContext(ToggleContext)
    
    return (
      
            <Button onClick = {toggleOpen}>{children}</Button>
      
    )
}