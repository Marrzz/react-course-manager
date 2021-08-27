import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router'

const Header = ({title, onAdd, showAdd}) => {


    return (
        <header className="header">
            <h1>{"Course Tracker"}</h1>
            {useLocation().pathname === "/" && <Button color={showAdd? "red": "green"} text={showAdd? "Close": "Add course"} onClick= {onAdd} />}
       </header>
    )
}



export default Header
