import './card.scss'

const Card = ({images, title, desc, weight, price, color, border}) => {

    const handleOrder = () => {
        const grainsInput = document.getElementById('grains');
        if (grainsInput) {
            grainsInput.value = title;
        }

        document.getElementById('order')?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className="card__block">
            <div className="card" style={{ background: color, border: `2px solid ${border}` }}>
                <header className="card__header">
                    <img className="header__images" src={images} alt={title}/>
                </header>
                <main className="card__body">
                    <h3 className="body__title">{title}</h3>
                    <p className="body__desc">{desc}</p>
                </main>
                <footer className="card__footer">
                    <div className="footer__info">
                        <div className="info__weight">{weight} кг</div>
                        <div className="info__price">{price} руб./шт</div>
                    </div>
                    <div className="footer__actions">
                        <button className="button" onClick={handleOrder}>Заказать</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Card