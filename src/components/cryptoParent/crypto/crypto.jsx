import './crypto.css';
import { ImSearch } from "react-icons/im";
import { useEffect, useState } from 'react';
import CryptoCard from '../cryptoCard/cryptoCard';

const Crypto = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(props.data);
    }, [])

    const handleCryptoSearch = (e) => {
        let tempData = [];
        props.data.filter((item) => {
            if(item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                tempData.push(item);
            }
        })
        setData(tempData);
    }

    return (
        <div className='cryptoParent'>
            <div className='cryptoTitleSearchParent'>
                <div className='cryptoSearchParent'>
                    <input className='cryptoSearchbar' placeholder='Search for crypto...' onChange={handleCryptoSearch}/>
                    <button className='cryptoSearchButton' ><ImSearch className='cryptoSearchButtonIcon' /></button>
                </div>
            </div>
            <div className='cryptoChild'>
                {
                    data.length?
                    data.map((item, index) => {
                        return(
                            <CryptoCard key={index} data={item} />
                        );
                    }):
                    <p style={{fontSize: "large"}}>Sorry, No crypto found :(</p>
                }
            </div>
        </div>
    );
}

export default Crypto;