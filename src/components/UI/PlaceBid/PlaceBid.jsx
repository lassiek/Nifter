
import { useState } from 'react'
import { Close, Logotype, MinusIcon, PlusIcon, SortingIcon } from '../../svg.module'
import BtnBorder from '../buttons/BtnBorder/BtnBorder'
import BtnPurple from '../buttons/BtnPurple/BtnPurple'

import classes from './place_bid.module.scss'


const PlaceBid = ({data, open, setOpen, setIsOpenMade}) => {

    const [bid, setBid] = useState (data.price)

    const buttonMinus = () => {
        if (bid > data.price) {
            setBid ((+bid - +data.minBid).toFixed(2))
        }
    }
    const buttonPlus = () => {
        setBid ((+bid + +data.minBid).toFixed(2))
    }

    const handleModalOpen = () => {
        setIsOpenMade(true)
        setOpen(false)
    }

    return (
        <div className={open ? `${classes.place_bid} ${classes.active}` : classes.place_bid } onClick={() => setOpen(false)}>
            <div className={classes.content} onClick={e => e.stopPropagation()}>
                <div className={classes.title}>
                    <h3>Place a bid</h3>
                    <button className={classes.btn_close} onClick={() => setOpen(false)}>
                        <Close />
                    </button>
                </div>
                <div className={classes.info}>
                    <div className={classes.img_nft}>
                        <img src={data.nft} alt={data.name} />
                    </div>
                    <div className={classes.block}>
                        <h4 className={classes.name}>{data.name}</h4>
                        <p className={classes.text}>{data.description}</p>
                        <div className={classes.author}>
                            <img className={classes.avatar} src={data.avatar} alt="avatar" />
                            <p>{data.author}</p>
                        </div>
                    </div>
                </div>
                <div className={classes.change_bid}>
                    <button className={bid > data.price ? classes.btn_bid : `${classes.btn_bid} ${classes.inactive}`} onClick={buttonMinus}><MinusIcon /></button>
                    <div className={classes.bid}>
                        <Logotype />{bid} ETH
                    </div>
                    <button className={classes.btn_bid} onClick={buttonPlus}><PlusIcon /></button>
                </div>
                <div className={classes.min_price}>
                    <SortingIcon />
                    <p>You must bid at least <span>{data.price} ETH</span></p>
                </div>
                <div className={classes.btns}>
                    <BtnPurple onClick={handleModalOpen}>Submit</BtnPurple>
                    <BtnBorder pink>See item</BtnBorder>
                </div>
            </div>

        </div>
    )
}

export default PlaceBid