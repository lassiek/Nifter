import { Link } from 'react-router-dom'
import Logo from './../UI/Logo/Logo'
import { footer } from '../../data'; 
import classes from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.row}>
                    <div className={classes.copyright}>
                        <Logo />
                        <p className={classes.text}>
                            {footer.text}
                        </p>
                        <div className={classes.icons_row}>
                            {
                                footer.icons.map((icon) => (
                                    <div key={icon.link} className={classes.icon}>
                                        <Link to={icon.link}>{icon.icon}</Link>
                                    </div>
                                )) 
                            }
                        </div>
                    </div>
                    <div className={classes.nav}>
                        {
                            footer.nav.map((nav) => (
                                <div key={nav.title} className={classes.col}>
                                    <div className={classes.title}>{nav.title}</div>
                                    {
                                        nav.list.map((link) => (
                                            <Link key={link.link} to={link.link}><p className={classes.subtitle}>{link.subtitle}</p></Link>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer