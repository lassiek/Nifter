import React from 'react'
import classes from './btn_border.module.scss'

const BtnBorder = ({ children, pink, small, ...props }) => {
    return (
        <button className={classes.btn_border} data-small={small} data-pink={pink} {...props}>
            { children }
        </button>
    )
}

export default BtnBorder