
import BtnPink from '../../UI/buttons/BtnPink/BtnPink'

import classes from './how_it_works.module.scss'




const HowItWorks = ({ data }) => {

    
    return (
        <section className={classes.how_it_works}>
            <div className='container'>
                <div className={classes.row}>
                    <div className={classes.block}>
                        <h2 className={classes.title}>{data.title}</h2>
                        <p className={classes.text}>{data.text}</p>
                        <div className={classes.btn}>
                            <BtnPink>{data.btn}</BtnPink>
                        </div>
                    </div>
                    <div className={classes.content}>
                        <div className={classes.items}>
                        {
                            data.items.map((item, title) => (
                                <div className={classes.item__border} key={title}>
                                    <div className={classes.item}>
                                        <div className={classes.image}>
                                            {item.img}
                                        </div>
                                        <h4 className={classes.item__title}>{item.title}</h4>
                                        <p className={classes.item__text}>{item.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks