import React from 'react'
import { SearchIcon } from '../../../svg.module'
import classes from './btn_search.module.scss'

const BtnSearch = () => {
    return (

        <div className={classes.btn_search}>
            <SearchIcon /> 
            <input className={classes.input} type="search" placeholder="Search"/>
        </div>

    )
}

export default BtnSearch