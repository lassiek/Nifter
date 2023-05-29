
import { Close, Logotype, MinusIcon, PlusIcon, SortingIcon } from '../../svg.module'
import BtnBorder from '../buttons/BtnBorder/BtnBorder'
import BtnPurple from '../buttons/BtnPurple/BtnPurple'

import classes from './made_bid.module.scss'


const MadeBid = ({ isOpenMade, setIsOpenMade, bid }) => {


    return (
        <div className={isOpenMade ? `${classes.made_bid} ${classes.active}` : classes.made_bid } onClick={() => setIsOpenMade(false)}>
            <div className={classes.content} onClick={e => e.stopPropagation()}>
                <div className={classes.close}>
                    <h3>Place a bid</h3>
                    <button className={classes.btn_close} onClick={() => setIsOpenMade(false)}>
                        <Close />
                    </button>
                </div>
                <h3 className={classes.title}>Congratulation! <br/> Your bid <span className={classes.bid}><Logotype />ETH</span> is accepted.</h3>
                <div className={classes.btns}>
                    <BtnBorder pink>See item</BtnBorder>
                    <BtnPurple onClick={() => setIsOpenMade(false)}>Return</BtnPurple>
                </div>
            </div>
        </div>
    )
}

export default MadeBid