import './footer.scss'
import logoIcon from '/images/coffeSUN.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="logo">
                    <img className="logo__img" src={logoIcon} alt="Логотип компании"/>
                </div>
                <div className="footer__rights">Все права защищены &copy; 2025</div>
            </div>
        </footer>
    )
}

export default Footer