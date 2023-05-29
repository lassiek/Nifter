
import NavBar from '../Header/NavBar/NavBar';
import Logo from '../UI/Logo/Logo';
import { designation, navigation } from '../../data'; 
import BtnSearch from '../UI/buttons/BtnSearch/BtnSearch'
import BtnPurple from '../UI/buttons/BtnPurple/BtnPurple';

import classes from './header.module.scss'


const Header = () => {
    
    return (
        <header className={classes.header}>
            <div className='container_big'>
                <div className={classes.row}>
                    <Logo className={classes.logo} data={designation}/>
                    <NavBar data={navigation} />
                    <div className={classes.btns}>
                        <BtnSearch />
                        <BtnPurple children='Explore'/>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header