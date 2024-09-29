import './style.css'

function Header () {
    return (
        <>
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Привет, меня зовут <em>Иван</em></strong><br />
                я frontend разработчик 
            </h1>
            <div className="header__text">
                <h1>Дать слово значит испытать себя.</h1>
            </div>
            <a href="#!" className="btn">Скачать Резюме</a>
        </div>
        </header>
        </>
    )
}

export default Header;