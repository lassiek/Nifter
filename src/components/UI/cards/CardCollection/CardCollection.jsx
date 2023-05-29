import { Link } from 'react-router-dom'

import classes from './card_collection.module.scss'


const CardCollection = ({ data }) => {

    
    return (
        <Link to='/home' className={classes.card}>
            <div className={classes.images}>
                {/* {
                    data.images.map((item, i) => (
                        <div>
                            <img src={item} key={i} alt="Item" />
                        </div>
                    ))
                } */}
                <div className={classes.images_top}>
                    <img src={data.images[0]} alt="Item" />
                    <img src={data.images[1]} alt="Item" />
                    <img src={data.images[2]} alt="Item" />
                </div>
                <div className={classes.images_bottom}>
                    <img src={data.images[3]} alt="Item" />
                </div>
            </div>
            <div className={classes.block}>
                <h3 className={classes.title}>{data.name}</h3>
                <p className={classes.items}>{data.items}</p>
            </div>
        </Link>
    )
}

export default CardCollection