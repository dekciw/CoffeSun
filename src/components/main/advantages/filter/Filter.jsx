import './filter.scss'

function Filter() {
    return (
        <div className="filter">
            <div className="filter__block">
                <button className='button button-transition'>Blasercafe</button>
                <button className='button button-transition'>Boasi</button>
                <button className='button button-transition'>Lavazza</button>
                <button className='button button-transition'>Garibaldi</button>
                <button className='button button-transition'>Vergnano</button>
            </div>
        </div>
    )
}

export default Filter;