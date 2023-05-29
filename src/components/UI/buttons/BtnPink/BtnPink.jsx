import React from 'react'
import classes from './btn_pink.module.scss'

const BtnPink = ({ children, ...props }) => {
    return (
        <button className={classes.btn_pink} {...props}>
           { children }
        </button>
    )
}

export default BtnPink