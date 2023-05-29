import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Close, MenuBurger } from '../../svg.module'
import BtnSearch from '../../UI/buttons/BtnSearch/BtnSearch'
import BtnPurple from '../../UI/buttons/BtnPurple/BtnPurple'

import classes from './navBar.module.scss'


const NavBar = ({ data }) => {

    const [navBarOpen, setNavBarOpen] = useState(false)
    const toggleMenu = () => setNavBarOpen((isOpen) => !isOpen);

    return (

        <nav className={classes.navbar}>
            <ul className={classes.row}>
                {
                    data.list.map((item, key) => (
                        <li className={classes.item} key={key}>
                            <NavLink className={classes.link} to={item.link}>{ item.title }</NavLink>
                        </li>
                    ))
                }
            </ul>

                
            <div className={classes.menuBurger} onClick={() => setNavBarOpen(e => !e)}>
                { navBarOpen ? <Close /> : <MenuBurger /> }
            </div>

            <div className={navBarOpen ? `${classes.dropdownInner} ${classes.active}` : classes.dropdownInner} onClick={() => setNavBarOpen(false)}>
                <div className={classes.open}>

                    <div className={classes.dropdown} onClick={e => e.stopPropagation()}>
                        <div className={classes.col}>

                            {
                                data.list.map((item, key) => (
                                <NavLink className={classes.linkMobile} key={key} to={item.link} onClick={toggleMenu}>
                                    { item.icon }{ item.title }
                                </NavLink>

                            ))
                            }
                            <div className={classes.btns}>
                                <BtnSearch />
                                <BtnPurple children='Explore'/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}


export default NavBar