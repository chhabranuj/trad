import './help.css';
import HelpQuestions from '../helpQuestions/helpQuestions';

const Help = () => {
    const faqs = [
        {
            question: "Who should I contact if I need any help or support?",
            answer: <span>If you need any support or help, you can connect us on our helpline service <a href="tel:7217746275" style={{color: "#9467fe", cursor: "pointer", textDecoration: "none"}}>(+91 7217746275)</a> or you can email us on <a href = "mailto: anujchhabra.work@gmail.com" style={{color: "#9467fe", cursor: "pointer", textDecoration: "none"}}>(query@oneHowl.ac.in)</a>. We will try our best to help you out.</span>
        },
        {
            question: "How can I create a Tradicious account?",
            answer: <span>You can easily create your Tradicious account. Just click on menu on Titlebar and choose account section.</span>
        },
        {
            question: "Do I have to invest real money in Tradicious?",
            answer: <span>No, there is no real money in Tradicious. When you Sign In we give you $10,000 as a signing bonus and you can invest them.</span>
        },
        {
            question: "How can I earn more money if I lost all of my money in trading?",
            answer: <span>With your referral code, you can earn $500. Whenever someone enter your referral you both get $500.</span>
        },
        {
            question: "Is Tradicious a free website?",
            answer: <span>Yes, Tradious is a free website. We don't charge a penny for anything, just create your account and start trading.</span>
        },
        {
            question: "Can I earn real money in Tradicious?",
            answer: <span>No, Tradicious is a learing platform. It's only for fun.</span>
        },
        {
            question: "Is Tradicious easy to use?",
            answer: <span>Yes, Tradicious is very easy to use. It has a simple user interface so that you can trade easily.</span>
        },
        {
            question: "Can we trade with real money in Tradicious?",
            answer: <span>No, Tradicious is made only for learning and fun. You can only trade with the funds we provide you.</span>
        },
        {
            question: "Is Crypto data shown in Tradicious is real-time data?",
            answer: <span>Yes, Tradicious shows the real time data of all the crypto currencies that changes accoding to the market.</span>
        },
        {
            question: "How to Sign Out from Tradicious?",
            answer: <span>Once you logged in, you can signout from the account section.</span>
        }
    ]

    return (
        <div className='helpParent'>
            <div className='helpChild'>
                {
                    faqs.map((item, index) => {
                        return (
                            <div key={index} className='faqChild'>
                                <HelpQuestions key={index} data={item} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Help;