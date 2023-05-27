import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './components/footer/footer';
import Landing from './components/landing/landing';
import TitleBar from './components/titleBar/titleBar';
import GetStarted from './components/getStarted/getStarted';
import Crypto from './components/cryptoParent/crypto/crypto';
import Newsletter from '../src/components/newsletter/newsletter';
import HelpPreview from './components/helpParent/helpPreview/helpPreview';
import CurrenciesWeOffer from './components/currenciesWeOffer/currenciesWeOffer';
import PageAbout from './components/pageAbout/pageAbout';
import Help from './components/helpParent/help/help';
import CryptoDetails from './components/cryptoParent/cryptoDetails/cryptoDetails';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((response) => {
        setCryptoData(response.data);
      })
  }, [])

  return (
    <div>
      <TitleBar />
      <PageAbout />
      <CryptoDetails />
      {/* <Help /> */}
      {/* <Landing /> */}
      {/* <Crypto data={cryptoData}/> */}
      <HelpPreview />
      <GetStarted />
      <Newsletter />
      <CurrenciesWeOffer data={cryptoData}/>
      <Footer />
    </div>
  );
}

export default App;

// Cryptoma
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false
// https://api.wazirx.com/api/v2/tickers
// https://dribbble.com/shots/19842152-COIN-Trade-Crypto-Trading-Web-App
// https://cryptozone.dexignzone.com/frontend/react/