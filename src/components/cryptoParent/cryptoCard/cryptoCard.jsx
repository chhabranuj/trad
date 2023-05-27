import './cryptoCard.css';

const CryptoCard = (props) => {

    return (
        <div className='cryptoCardParent'>
            <div className='cryptoCardDetails'>
                <p className='cryptoCardName'>{props.data.name}</p>
                <p className='cryptoCardCurrentPrice'>₹ {props.data.current_price}</p>
                <p style={{color: props.data.price_change_percentage_24h > 0? "green": "red", fontSize: "0.75rem", margin: "0"}}>({props.data.price_change_percentage_24h})</p>
            </div>
            <img className='cryptoCardIcon' src={props.data.image} />
            <div className='chart'>
                <p className='cryptoCardLow'><span style={{color: "green"}}>High:</span> {props.data.high_24h}</p>
                <p className='cryptoCardLow' style={{margin: "0.25rem 0"}}>Change: {props.data.price_change_24h.toFixed(2)}</p>
                <p className='cryptoCardLow'><span style={{color: "red"}}>Low:</span> {props.data.low_24h}</p>
            </div>
        </div>
    );
}

export default CryptoCard;
{/* <span style={{color: props.data.price_change_percentage_24h > 0? "green": "red", fontSize: "0.75rem"}}></span> */}