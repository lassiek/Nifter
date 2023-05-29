
import classes from './creator.module.scss'



const Creator = ({ data }) => {

    
    return (
        <section className={classes.creator}>
            <div className='container'>
                <div className={classes.body}>
                    <div className={classes.block}>
                        <h3 className={classes.title}>{data.title}</h3>
                        <p className={classes.text}>{data.text}</p>
                        {/* <h5 id="check-email" className={classes.title}></h5> */}
                        <form className={classes.form}>
                            <input id="creator-input" className={classes.input} type="email" placeholder={data.placeholder} />
                            <button type="submit" id="create-button" className={classes.btn}>
                                {data.btn}
                            </button>
                        </form>
                    </div>
                    <div className={classes.img}>
                        <img src={data.img} alt="coin" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Creator