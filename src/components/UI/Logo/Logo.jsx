import { Link } from 'react-router-dom'
import { designation } from '../../../data'
import { Logotype } from '../../svg.module'
import classes from './logo.module.scss'

const Logo = () => {


    const handlerClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Link to='/home' onClick={handlerClick}>
            <div className={classes.logo}>
                {designation.logo}
                <h6>{ designation.brand }</h6>
            </div>
        </Link>
    )
}

export default Logo