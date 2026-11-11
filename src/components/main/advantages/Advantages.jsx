import './advantages.scss'
import coffeeIcon from '/images/coffee.png'

function Advantages() {
    return (
        <section>
            <div className="advantages" id='advantages'>
                <div className="container">
                    <div className="advantages__block">
                        <h2 className="title">Преимущества покупки кофе в зёрнах</h2>
                        <p className="advantages__desc">
                            Кофе в зёрнах зачастую продаётся, как правило, двух видов – робуста и арабика. Последний сорт
                            встречается намного чаще из-за насыщенности вкуса, робусту в большинстве случаев используют в
                            качестве добавки. Ценители именно такого продукта предпочитают покупать кофе зёрна в магазинах
                            по следующим причинам:
                        </p>
                    </div>
                    <div className="advantages__info">
                        <div className="advantages__images">
                            <div className="advantages__img--bg"></div>
                            <img className="advantages__img" src={coffeeIcon} alt="coffee"/>
                        </div>
                        <div className="advantages__list">
                            <div className="advantages__item">
                                <div className="advantages__circle"></div>
                                <div className="advantages__number">1</div>
                                <p className="advantages__text">В зерновом кофе намного больше кофеина</p>
                            </div>
                            <div className="advantages__item">
                                <div className="advantages__circle"></div>
                                <div className="advantages__number">2</div>
                                <p className="advantages__text">Вкус и аромат только что намолотого кофе выражен ярче</p>
                            </div>
                            <div className="advantages__item">
                                <div className="advantages__circle"></div>
                                <div className="advantages__number">3</div>
                                <p className="advantages__text">Такой напиток буквально переполнен витаминами и полезными микроэлементами.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages