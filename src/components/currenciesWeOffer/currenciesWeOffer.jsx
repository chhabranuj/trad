import './currenciesWeOffer.css';

const CurrenciesWeOffer = (props) => {
    return (
        <div className='currenciesWeOfferParent'>
            <p className='currenciesWeOfferTitle'>Currencies We Offer!!!</p>
            <p className='currenciesWeOfferSubTitle'><span style={{color: "#9467fe"}}>Tradicious</span> provides you with more than 99 Cryptocurrencies to trade.</p>
            <marquee direction="left">
                <div className='currenciesWeOfferChild'>
                    {
                        props.data.map((item, index) => {
                            return (
                                <div className='currenciesWeOfferCard' key={index}>
                                    <img className='currenciesWeOfferCardIcon' src={item.image} />
                                    <p className='currenciesWeOfferCardTitle'>{item.name}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </marquee>
        </div>
    );
}

export default CurrenciesWeOffer;