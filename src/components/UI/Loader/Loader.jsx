import { designation } from '../../../data'
import { Logotype } from '../../svg.module'
import classes from './loader.module.scss'

const Loader = () => {

    return (
        <div className={classes.loader}>
            {designation.logo}
            <h6>{ designation.brand }</h6>
        </div>
    )
}

export default Loader