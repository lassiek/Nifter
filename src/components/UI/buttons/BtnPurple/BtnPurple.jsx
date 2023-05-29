import React from 'react'
import classes from './btn_purple.module.scss'

const BtnPurple = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.btn_purple}>
           { children }
        </button>
    )
}

export default BtnPurple