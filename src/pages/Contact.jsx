function Contact () {
    return (
        <>
            <main className="section">
            <div className="container">

                <h1 className="title-1">Контакты</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Местоположение</h2>
                        <p>Москва, Россия</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+79051234567">+7 (985) 618-47-39</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Gmail</h2>
                        <p><a href="mailto:impovskii@gmail.com">impovskii@gmail.com</a></p>
                    </li>
                </ul>

            </div>
            </main>
        </>
    )
}

export default Contact