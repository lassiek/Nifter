import { useState } from "react";
import { FilledLikeIcon, LikeIcon, SortingIcon } from '../../../svg.module'
import BtnBorder from '../../buttons/BtnBorder/BtnBorder'
import BtnPink from '../../buttons/BtnPink/BtnPink'
import MadeBid from "../../MadeBid/MadeBid";
import PlaceBid from "../../PlaceBid/PlaceBid";
import classes from './card_auction.module.scss'


const CardAuction = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenMade, setIsOpenMade] = useState(false)
    const [like, setLike] = useState(false)

    const onClickLike = () => {
        setLike(!like)
    }
    
    // const current = {currentSlide}
    // console.log (current)
    const [currentSlide, setCurrentSlide] = useState(0)
    
    return (
        <div className={classes.card} key={data.id}>
        {/* <div className={currentSlide === data.id ? `${classes.card} ${classes.active}` : classes.card}> */}
            <div className={classes.card_top}>
                <img className={classes.img_nft} src={data.nft} alt={data.name}/>
                <div className={classes.icon_like} onClick={()=> onClickLike ()}>
                    {/* <LikeIcon className={like === true ? classes.pink : classes.svg}/> */}
                    {like ? <FilledLikeIcon /> : <LikeIcon />}
                </div>
                <img className={classes.avatar} src={data.avatar} alt="avatar"/>
            </div>
            <div className={classes.card_botton}>
                <div className={classes.info}>
                    <div className={classes.block}>
                        <h3 className={classes.name}>
                            {data.name}
                        </h3>
                        <h4 className={classes.price}>
                            {data.price} ETH
                        </h4>
                        <p className={classes.author}>
                            {data.author}
                        </p>
                        <p className={classes.in_stock}>
                            {data.inStock} in stock
                        </p>
                    </div>
                    <div className={classes.bid}>
                        <SortingIcon />
                        <p>
                            Auction step <span>{data.minBid} ETH</span>
                        </p>
                    </div>
                </div>
                <div className={classes.btn}>
                    <BtnPink onClick={() => setIsOpen(true)}>Place Bid</BtnPink>
                    <BtnBorder small>View</BtnBorder>
                </div>
                <PlaceBid data={data} open={isOpen} setOpen={setIsOpen} isOpenMade={isOpenMade} setIsOpenMade={setIsOpenMade}/>
                <MadeBid data={data} isOpenMade={isOpenMade} setIsOpenMade={setIsOpenMade} />
            </div>
        </div>
    )
}

export default CardAuction