import './products.scss'
import Filter from "../advantages/filter/Filter.jsx";
import Card from "../advantages/card/Card.jsx";
import cardData from "./../../../data/cardData.json";

function Products() {
    return (
        <section>
            <div className="products" id="products">
                <div className="container">
                    <h2 className="title">Кофе в зернах</h2>
                    <div className="products__filter">
                        <Filter/>
                    </div>
                    <div className="products__cards">
                        {cardData.map(item => {
                            return <Card
                                {...item}
                                key={item.id}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products