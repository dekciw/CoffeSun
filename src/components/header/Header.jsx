import './header.scss'
import logoIcon from '/images/coffeSUN.svg'

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="logo">
                    <img className="logo__img" src={logoIcon} alt="Логотип компании"/>
                </div>
                <nav className='nav'>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a className='nav__link' href="#advantages">Преимущества</a>
                        </li>
                        <li className='nav__item'>
                            <a className='nav__link' href="#products">Каталог</a>
                        </li>
                        <li className='nav__item'>
                            <a className='nav__link' href="#order">Оформить заказ</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header