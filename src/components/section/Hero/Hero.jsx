
import { useState } from 'react'
import { hero } from '../../../data'
import BtnBorder from '../../UI/buttons/BtnBorder/BtnBorder'
import BtnExplore from '../../UI/buttons/BtnPurple/BtnPurple'
import statue from '../../../assets/image/statue.png'
import Countdown from '../../UI/Countdown/Countdown'

import classes from './hero.module.scss'
import PlaceBid from '../../UI/PlaceBid/PlaceBid'
import MadeBid from '../../UI/MadeBid/MadeBid'


const Hero = ({ data }) => {

    const [isOpen, setIsOpen] = useState (false)
    const [isOpenMade, setIsOpenMade] = useState(false)
    
    return (
        <section className={classes.hero}>
            <div className='container'>
                <div className={classes.row}>
                    <div className={classes.block}>
                        <h1 className={classes.title}>{ hero.title }</h1>
                        <p className={classes.text}>{ hero.text }</p>
                        <div className={classes.btns}>
                            <BtnExplore>{ hero.btn1 }</BtnExplore>
                            <BtnBorder>{ hero.btn2 }</BtnBorder>
                        </div>
                        <div className={classes.statistics}>
                            {
                                data.statistics.map((item, key) => (
                                    <div className={classes.item} key={key}>
                                        { item.icon }
                                        <div>
                                            <h6 className={classes.statistics_title}>{ item.title }</h6>
                                            <p className={classes.statistics_text}>{ item.text }</p>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    </div>
                    <div className={classes.block}>
                        <div className={classes.statue}>
                            <img className={classes.img} src={statue} alt="statue" />
                            <div className={classes.neon}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container_big">
                <div className={classes.countdown}>
                    <Countdown data={data.countdown} open={isOpen} setIsOpen={setIsOpen} />
                </div>
                <PlaceBid data={data.card} open={isOpen} setOpen={setIsOpen} setIsOpenMade={setIsOpenMade}/>
                <MadeBid isOpenMade={isOpenMade} setIsOpenMade={setIsOpenMade} />
            </div>
        </section>
    )
}

export default Hero