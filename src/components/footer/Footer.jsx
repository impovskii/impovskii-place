import './style.css'


import vk from "./../../img/icons/vk.svg"
import github from "./../../img/icons/gitHub.svg"

function Footer () {
    return (
        <>
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://vk.com/pavelyankee"><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="https://github.com/impovskii"><img src={github} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2024 impovskii-place.ru</p>
                </div>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer;