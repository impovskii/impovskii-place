import sun from './../../img/icons/sun.svg'
import moon from './../../img/icons/moon.svg'

import { NavLink } from 'react-router-dom'

import './style.css'

function Navbar () {

    const activeLink = "nav-list__link nav-list__link--active"
    const normalLink = "nav-list__link"


    return (
        <>
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo"><strong>Impovskii</strong> place</NavLink>
                

                <button className="dark-mode-btn"> 
                    <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
                    <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
                </ button>

                <ul className="nav-list">
                    <li className="nav-list__item"><NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>Главная</NavLink></li>
                    <li className="nav-list__item"><NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>Проекты</NavLink></li>
                    <li className="nav-list__item"><NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>Контакты</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
        </>
    )
}

export default Navbar;