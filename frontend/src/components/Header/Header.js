import React, {useState} from 'react'
//import logo from '../../../public/images/logo-gl.png'
import styles from './header.module.scss'


function Header(){
    const [active, setActive] = useState(false)

    return (
        <nav className={`navbar  is-fixed-top ${styles.darkTheme}`} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className={`${styles.logo}`} href="#">
                <img src="/images/logo-gl2.png" width="150" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu"
                   aria-expanded="false" data-target="navbarBasicExample"
                   onClick={() => { setActive(!active) }}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu is-dark ${styles.darkTheme} ${active ? 'is-active' : ''} `}>
                <div className="navbar-start">

                    <div className={`navbar-item has-dropdown is-hoverable ${styles.item} ` }>
                        <a className="navbar-link">
                            Brands
                        </a>

                        <div className={`navbar-dropdown ${styles.darkTheme}`}>
                            <a className="navbar-item">
                                Nike
                            </a>
                            <a className="navbar-item">
                                Adidas
                            </a>
                            <a className="navbar-item">
                                Reebok
                            </a>
                        </div>
                    </div>

                    <a className={`navbar-item ${styles.item}`}>
                        New arrivals
                    </a>

                    <a className={`navbar-item ${styles.item}`}>
                        trending
                    </a>

                   
                </div>


                <div className="navbar-end">

                    <div className="navbar-item">
                        <div className="field">
                             <p className="control has-icons-left">
                                <input className="input" type="text" placeholder="Search"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-search"></i>
                                </span>
                             </p>
                        </div>
                    </div>

                    <a className={`navbar-item ${styles.item}`}>
                            Sign in 
                    </a>

                    <a className={`navbar-item ${styles.item}`}>
                        Sign up
                    </a>
                </div>

            </div>
        </nav>
    )
}
export default Header;