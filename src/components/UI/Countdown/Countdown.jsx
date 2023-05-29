
import { useState, useEffect } from 'react'
import BtnBorder from '../../UI/buttons/BtnBorder/BtnBorder'

import classes from './countdown.module.scss'


const Countdown = ({setIsOpen, data}) => {


    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date(data.date).getTime();

        interval = setInterval(() => {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const h = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const s = Math.floor((distance % (60 * 1000)) / 1000);
        const hours = h < 10 ? '0' + h : h;
		const minutes = m < 10 ? '0' + m : m;
		const seconds = s < 10 ? '0' + s : s;

        if (distance < 0) {
            clearInterval(interval.current);
        } else {
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
        });
    };

    useEffect(() => {
        startTimer();
    });

    return (
        <div className={classes.countdown}>
            <div className={classes.row}>
                <div className={classes.price}>
                    <p className={classes.subtitle}>
                        {data.bid}
                    </p>
                    <h2 className={classes.title}>
                        {data.eth}
                    </h2>
                    <p id="eth-rate" className={classes.text}>
                        {data.dollar}
                    </p>
                </div>
                <div className={classes.timer}>
                    <h2 className={classes.subtitle}>
                        {data.subtitle}
                    </h2>
                    <div className={classes.table}>
                        <div className={classes.timer_number}>
                            <h2 id="hours" className={classes.title}>{timerHours}</h2>
                            <p className={classes.text}>Hours</p>
                        </div>
                        <div className={classes.timer_number}>
                            <h2 id="mins" className={classes.title}>{timerMinutes}</h2>
                            <p className={classes.text}>Mins</p>
                        </div>
                        <div className={classes.timer_number}>
                            <h2 id="secs" className={classes.title}>{timerSeconds}</h2>
                            <p className={classes.text}>Secs</p>
                        </div>
                    </div>
                </div>
                <div className={classes.btns}>
                    <BtnBorder pink onClick={() => setIsOpen(true)}>{data.btn1}</BtnBorder>
                    <BtnBorder pink>{data.btn2}</BtnBorder>
                </div>
            </div>
    </div>
    )
}

export default Countdown