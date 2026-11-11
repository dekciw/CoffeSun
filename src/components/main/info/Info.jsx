import './info.scss'
import coffeeIcon from '/images/big-coffee.png'
import {useState} from "react";

function Info() {

    const [offset, setOffset] = useState({x: 0, y: 0})

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        const x = (clientX - centerX) * 0.02
        const y = (clientY - centerY) * 0.02

        setOffset({x, y})
    }

    return (
        <section>
            <div className="info" onMouseMove={handleMouseMove}>
                <div className="container">
                    <div className="info__block">
                        <h1 className="info__title">Мечтай вместе с кофейными зернами</h1>
                        <p className="info__desc">
                            Кофейное зерно - это семя растения Coffea и источник кофе. Это пипс внутри красного или
                            фиолетового плода, который часто называют вишней. Как и обычная вишня, кофейный плод также
                            является так называемым косточковым плодом.
                        </p>
                        <div className="info__btn">
                            <a href='#products' className='button'>Выбрать кофе</a>
                            <a href='#advantages' className='button button-transition'>Преимущества</a>
                        </div>
                    </div>
                    <div className="info__images" style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
                        <div className="info__bg"></div>
                        <img className="info__img" src={coffeeIcon} alt="Зерна в виде сердчека"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info