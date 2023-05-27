import './newsletter.css';
import { useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Newsletter = () => {
    const [email, setEmail] = useState({
        id: "",
        error: false
    });

    const setNewsletterEmail = (e) => {
        setEmail({
            id: e.target.value,
            error: false
        });
    }

    const handleNewsletterEmail = () => {
        if(email.id.split("@")[1] == "gmail.com") {
            setEmail({
                ...email,
                error: false
            });
        }
        else {
            setEmail({
                ...email,
                error: true
            });
        }
    }

    return (
        <div className='newsletterParent'>
            <p className='newsletterHeading'>Newsletter</p>
            <p className='newsletterSubHeading'><span style={{color: "#9467fe"}}>Tradicious</span> provide you all the trading updates on daily basis.</p>
            <div className='newsletterChild'>
                <div className='newsletterContainer'>
                    <p className='newsletterTagline'>Stay up to date with <br/>upcoming news and updates</p>
                    <p className='newsletterSubTagline'>Subscribe and don't miss anything.</p>
                </div>
                <div className='newsletterContainer'>
                    <div className='newsletterEmailParent'>
                        <input className='newsletterEmail' type="email" name="email" placeholder='Enter your email address.' onChange={setNewsletterEmail} />
                        <button className='newsletterSubmitButton' onClick={handleNewsletterEmail}><FaLongArrowAltRight className='newsletterEmailButtonIcon' /></button>
                    </div>
                    {email.error && <p className='newsletterEmailError'>Please enter a valid Gmail id.</p>}
                    <p className='newsletterTAndC'>By entering your address and clicking Submit, you affirm you have read and agree to the <span style={{color: "#6932d5", cursor: "pointer"}}>Privacy Policy</span> and <span style={{color: "#6932d5", cursor: "pointer"}}>Terms & Conditions</span> and want to receive news.</p>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;;