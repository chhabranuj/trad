import './cryptoDetails.css';
import {
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from 'recharts';
import { BsArrowUpRight } from "react-icons/bs";
import { BsArrowDownLeft } from "react-icons/bs";

const CryptoDetails = () => {
    const chartData = [
        {
            time: "12:25",
            value: 2000,
            currentValue: "3200",
        },
        {
            time: "12:30",
            value: 3000,

            currentValue: "3200",
        },
        {
            time: "12:35",
            value: 8000,
            currentValue: "3200",
        },
        {
            time: "12:40",
            value: -2000,
            currentValue: "3200",
        },
        {
            time: "12:45",
            value: 1000,
            currentValue: "3200",
        },
        {
            time: "12:50",
            value: 3500,
            currentValue: "3200",
        },
        {
            time: "12:55",
            value: 1000,
            currentValue: "3200",
        },
        {
            time: "01:00",
            value: -1000,
            currentValue: "3200",
        },
        {
            time: "01:05",
            value: -5900,
            currentValue: "3200",
        },
        {
            time: "01:10",
            value: 1500,
            currentValue: "3200",
        }
    ];

    const cryptoData = [
        {
            title: "Current Price",
            amount: 2320983,
        },
        {
            title: "Market Cap",
            amount: 44928995332873,
        },
        {
            title: "Total Volume",
            amount: 956136373797,
        },
        {
            title: "Max Supply",
            amount: 21000000.0,
        },
        {
            title: "Circulating Supply",
            amount: 19363181.0,
        },
        {
            title: "Price Change 24hr",
            amount: -6987.020104963798,
        },
        {
            title: "Market Cap Rank",
            amount: 1,
        },
        {
            title: "Total Supply",
            amount: 120381822.17146,
        }
    ]

    const abbreviateNumber = (value) => {
        let newValue = value;
        const suffixes = ["", "K", "M", "B","T"];
        let suffixNum = 0;
        while (newValue >= 1000) {
          newValue /= 1000;
          suffixNum++;
        }
      
        newValue = newValue.toPrecision(3);
      
        newValue += suffixes[suffixNum];
        return newValue;
      }
    
    return (
        <div className='cryptoDetailsParent'>
            <div className='cryptoDetailsChild'>
                <div className='cryptoDetailsLeftContainer'>
                    <div className='leftContainerCryptoType'>
                        <img className='cryptoTypeImage' src={"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"} alt="Crypto Type Img" />
                        <p className='cryptoTypeName'>Bitcoin <span style={{color: "#7e87bf", fontSize: "small"}}>BTC</span></p>
                    </div>
                    <div className='leftContainerCryptoContent'>
                        <p className='cryptoContentRate'>₹2268361 <span style={{color: "#7e87bf", fontSize: "large"}}>INR</span></p>
                        <div className='cryptoContentDetails'>
                            <div className='cryptoContentRateChangeConatiner'>
                                {2.5 > 0?<BsArrowUpRight style={{color: "green"}} />: <BsArrowDownLeft style={{color: "red"}} />}
                                <p className='cryptoContentRateChange'> ₹23432 <span style={{fontSize: "small"}}>(2.4%)</span></p>
                            </div>
                            <div className='cryptoContentAllTimeRateContainer'>
                                <p className='cryptoContentAllTimeRate'><span style={{color: "green"}}>HGH:</span> &nbsp;<span style={{fontSize: "medium", color: "#362465"}}>₹23432</span></p>
                                <p className='cryptoContentAllTimeRate'><span style={{color: "darkred"}}>LOW:</span> &nbsp;<span style={{fontSize: "medium", color: "#362465"}}>₹11132</span></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ResponsiveContainer width={"100%"} aspect={4}>
                            <LineChart width={600} height={300} data={chartData}>
                                <Line type="monotone" dataKey="value" stroke="#7d54dd" dot={true} strokeWidth={2} />
                                <Line type="monotone" dataKey="currentValue" stroke="#261355" dot={false} strokeWidth={1.5} strokeDasharray="5 5" />
                                <CartesianGrid stroke="#ccc" horizontal={false} vertical={false} />
                                <XAxis dataKey="time" />
                                {/* <YAxis dataKey="value" /> */}
                                <Tooltip cursor={{ stroke: "#8884d8", strokeDasharray: 5  }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='cryptoContentExtraDetailsContainer'>
                        {
                            cryptoData.map((item, index) => {
                                return (
                                    <div key={index} className='cryptoContentExtraDetailsContent'>
                                        <p className='cryptoContentExtraDetailsName'>{item.title}</p>
                                        <p className='cryptoContentExtraDetailsRate'>₹{abbreviateNumber(item.amount)} <span style={{fontSize: "small"}}>INR</span></p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='cryptoDetailsRightContainer'>
                    <p>Make a trade</p>
                    <div className='buyOrSell'>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CryptoDetails;