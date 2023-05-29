import { useState, useEffect, useRef } from "react";
import CardAuction from '../../UI/cards/CardAuction/CardAuction'


import { RightArrow, LeftArrow } from "../../svg.module";
import classes from './live_auction.module.scss'





const getWidth = 430;

const LiveAuction = ({ data }) => {


  // const [cards, setCards] = useState(data.cards);
  // const [cardsForRender, setCardsForRender] = useState([]);
  
  // const [slide, setSlide] = useState(0);
  // const [transition, setTransition] = useState(0);
  // const [translate, setTranslate] = useState(getWidth);

  // const transitionRef = useRef();
  // const sliderRef = useRef();



  // useEffect(() => {
  //   if (cards.length) {
  //     setCardsForRender([cards[cards.length - 1], cards[0], cards[1]]);
  //   }
  // }, [cards]);

  const [currentIndex, setCurrentIndex] = useState(0)
  const [startAnimate, setStartAnimate] = useState(true)

  const prevArrow = (slides) => {
      setStartAnimate(true)
      setTimeout(() => {
          setStartAnimate(false)
      }, 750)
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
  }
  
  const nextArrow = (slides) => {
      setStartAnimate(true)
      setTimeout(() => {
          setStartAnimate(false)
      }, 750)
      const isLastSlide = currentIndex === slides.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
  }

  // const nextArrow = () => {
  //   setCardsForRender([cards[0], cards[1], cards[2]]);
  // }

  // const prevArrow = () => {
  //   setCardsForRender([cards[cards.length - 2], cards[cards.length - 1], cards[0]])
  // }

  // console.log (cardsForRender)


    // const goToNext = (slides) => {
    //     setStartAnimate(true)
    //     setTimeout(() => {
    //         setStartAnimate(false)
    //     }, 750)
    //     const isLastSlide = currentIndex === slides.length - 1
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1
    //     setCurrentIndex(newIndex)
    // }
    
    // useEffect(() => {
    //     const slider = sliderRef.current;
    
    //     const smooth = e => {
    //       if (e.target.className.includes('slide-list')) {
    //         transitionRef.current()
    //       }
    //     }
    
    //     slider.addEventListener('transitionend', smooth);
    
    //     return () => {
    //       slider.removeEventListener('transitionend', smooth);
    //     }
    // }, []);
    
  // useEffect(() => {
  //   if (transition === 0) {
  //     setTransition(0.5);
  //   }
  // }, [transition]);

  // const smoothTransition = () => {
  //   let newSlides = [];

  //   if (slide === cards.length - 1) {
  //     newSlides = [cards[cards.length - 2], cards[cards.length - 1], cards[0]];
  //   } else if (slide === 0) {
  //     newSlides = [cards[cards.length - 1], cards[0], cards[1]];
  //   } else {
  //     newSlides = cards.slice(slide - 1, slide + 2);
  //   }

  //   setTranslate(getWidth());
  //   setCardsForRender(newSlides);
  //   setTransition(0);
  // }
    
  // useEffect(() => {
  //   transitionRef.current = smoothTransition;
  // });
  
  // useEffect(() => {
  //   const loadData = async () => {
  //     const images = await data();
  //     setItems(images);
  //   };
  //   loadData();
  // }, []);
    
  // const changeSlide = (direction = 1) => {
  //   if (direction === 1) {
  //     setTranslate(translate + getWidth);
  //     setSlide(slide === cards.length - 1 ? 0 : slide + 1);
  //   } else {
  //     setTranslate(0);
  //     setSlide(slide === 0 ? cards.length - 1 : slide - 1);
  //   }
  // };
    
  // const goToSlide = (number) => {
  //   setSlide(number % items.length);
  // };

  // useEffect(() => {
  //   // if (!autoPlay) return;

  //   const interval = setInterval(() => {
  //     changeSlide(1);
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [cards.length, slide]);



    // const [currentIndex, setCurrentIndex] = useState(0)
    // const [startAnimate, setStartAnimate] = useState(true)

    // const goToPrevious = (slides) => {
    //     setStartAnimate(true)
    //     setTimeout(() => {
    //         setStartAnimate(false)
    //     }, 750)
    //     const isFirstSlide = currentIndex === 0
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    //     setCurrentIndex(newIndex)
    // }
    
    // const goToNext = (slides) => {
    //     setStartAnimate(true)
    //     setTimeout(() => {
    //         setStartAnimate(false)
    //     }, 750)
    //     const isLastSlide = currentIndex === slides.length - 1
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1
    //     setCurrentIndex(newIndex)
    // }


    // const NextArrow = ({onClick}) => {
    //     return (
    //         <div className={classes.arrow + ' ' + classes.next} onClick={onClick}>
    //             <RightArrow/>
    //         </div>
    //     )
    // }

    // const PrevArrow = ({onClick}) => {
    //     return (
    //         <div className={classes.arrow + ' ' + classes.prev} onClick={onClick}>
    //             <LeftArrow/>
    //         </div>
    //     )
    // }




    return (
        <section className={classes.live_auction}>
            <div className='container_big'>
                <h2 className={classes.title}>{ data.title }</h2>
                <div className={classes.row}>
                  <div className={classes.arrow + ' ' + classes.prev} onClick={prevArrow}>
                    <LeftArrow/>
                  </div>
                  <div className={classes.slider} >
                      {
                        data.cards.map((card, id) => (
                          <CardAuction data={ card } key={id} className={id===currentIndex ? `${classes.card} ${classes.active}` : classes.persons_img} />
                        ))
                      }
                    </div>
                    <div className={classes.arrow + ' ' + classes.next} onClick={nextArrow}>
                      <RightArrow />
                    </div>
                  </div>
                {/* <div className={classes.btns}>
                    <div className={classes.arrow_btn} onClick={() => goToPrevious(data.slides)}>
                        { data.arrowLeft }
                    </div>
                    <div className={classes.arrow_btn} onClick={() => goToNext(data.slides)}>
                        { data.arrowRight }
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default LiveAuction