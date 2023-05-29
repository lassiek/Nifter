import { collection } from '../../../data'
import CardCollection from '../../UI/cards/CardCollection/CardCollection'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.scss'

import classes from './collection.module.scss'



const Collection = ({ data }) => {

    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        centerPadding: "0",
        autoplay: true,
        speed: 600,
        autoplaySpeed: 3000,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    rows: 2,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 787,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    
    return (
        <section className={classes.collection}>
            <div className='container'>
                <h2 className={classes.title}>{ data.title }</h2>
                <Slider {...settings} className={classes.slider}>
                    {
                        collection.cards.map((card, id) => (
                            <CardCollection data={ card } key={id} className={classes.card}/>
                    ))
                    }
                </Slider>
                {/* <div className={classes.row}>
                    {
                        collection.cards.map((card, id) => (
                            <CardCollection data={ card } key={id} className={classes.card}/>
                    ))
                    }
                </div> */}
            </div>
        </section>
    )
}

export default Collection