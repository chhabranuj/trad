import './pageAbout.css';
import { useEffect, useState } from 'react';

const PageAbout = () => {
    const tradingQuotes = [
        "Trading doesn't just reveal your character; it also builds it if you stay in the game long enough.",
        "The goal of a successful trader is to make the best trades. Money is secondary.",
        "There is a time to go long, a time to go short and a time to go fishing.",
        "All you need is one pattern to make a living.",
        "Hope is bogus emotion that only costs you money.",
        "Never, ever argue with your trading system.",
        "In investing, what is comfortable is rarely profitable.",
        "In trading, the impossible happens about twice a year.",
        "Believe in analysis and not forecasting.",
        "There is a huge difference between a good trade and good trading."
    ];

    const [activeQuote, setActiveQuote] = useState("");

    useEffect(() => {
        setActiveQuote(tradingQuotes[Math.floor(Math.random() * 10)]);
    })

    return (
        <div className='pageAboutParent'>
            <p className='pageAboutTitle'>HELP</p>
            <p className='pageAboutQuote'>{activeQuote}</p>
            <div className='pageAboutFromToParent'>
                <p className='pageAboutFromTo'><span style={{color: "#9467fe", cursor: "pointer"}}>Home</span> &nbsp;&#x279C;&nbsp; <span style={{color: "#1c2e9e"}}>Help</span></p>
            </div>
        </div>
    );
}

export default PageAbout;