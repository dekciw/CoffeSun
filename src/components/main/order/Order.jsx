import './order.scss'
import coffeeIconLeft from '/images/coffee-order1.png'
import coffeeIconRight from '/images/coffee-order2.png'

function Order() {
    return (
        <section className='order' id="order">
            <div className="container">
                <h2 className="order__title">Оформить заказ</h2>
                <p className="order__desc">Заполните данные, и мы перезвоним вам для уточнения информации</p>
                <form className="order__form">
                    <div className="form__group">
                        <input className="form__input" type="text" id='name' placeholder='' required={true} name='name' autoComplete="name"/>
                        <label className="form__label" htmlFor='name'>Ваше имя</label>
                    </div>
                    <div className="form__group">
                        <input className="form__input" type="text" id='phone' placeholder='' required={true} name='phone' autoComplete="tel"/>
                        <label className="form__label" htmlFor='phone'>Ваш телефон</label>
                    </div>
                    <div className="form__group">
                        <input className="form__input" type="text" id='grains' placeholder='' required={true} readOnly={true} autoComplete="none"/>
                        <label className="form__label" htmlFor='grains'>Зёрна которые вас интересуют</label>
                    </div>
                    <button type="button" className="button button-big">Оформить заказ</button>
                </form>
            </div>

            <div className="order__circle--left">
                <img className='circle__img--left' src={coffeeIconLeft} alt="Зерна кофе"/>
            </div>

            <div className="order__circle--right">
                <img className='circle__img--right' src={coffeeIconRight} alt="Зерна кофе"/>
            </div>
        </section>
    )
}

export default Order;