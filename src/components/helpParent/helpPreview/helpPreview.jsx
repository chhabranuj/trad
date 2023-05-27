import './helpPreview.css';
import { TbMessages } from "react-icons/tb";
import HelpQuestions from '../helpQuestions/helpQuestions';
import HelpPreviewImg from '../../../assets/images/helpPreviewImg.png';

const HelpPreview = () => {
    const faqs = [
        {
            question: "How can I create a Tradicious account?",
            answer: "You can easily create your Tradicious account. Just click on menu on Titlebar and choose account section."
        },
        {
            question: "Do I have to invest real money in Tradicious?",
            answer: "No, there is no real money in Tradicious. When you Sign In we give you $10,000 as a signing bonus and you can invest them."
        },
        {
            question: "How can I earn more money if I lost all of my money in trading?",
            answer: "With your referral code, you can earn $500. Whenever someone enter your referral you both get $500."
        }
    ]

    return (
        <div className='helpPreviewParent'>
            <div className='helpPreviewLeftContainer'>
                <p className='helpPreviewHeading'>Frequently asked questions</p>
                <p className='helpPreviewSubHeading'>New to <span style={{color: "#9467fe"}}>Tradicious</span>? Browse our list of frequently asked questions to find what interests you.</p>
                {
                    faqs.map((item, index) => {
                        return (
                            <HelpQuestions key={index} data={item} />
                        );
                    })
                }
                <div className='visitHelpParent'>
                    <TbMessages className='visithelpIcon'/>
                    <div>
                        <p className='visitHelpTagline'>Need to ask a question? Try out our FAQ page</p>
                        <p className='visitHelpLink'>Visit FAQ page</p>
                    </div>
                </div>
            </div>
            <div className='helpPreviewRightContainer'>
                <img src={HelpPreviewImg} className='helpPreviewImage' />
            </div>
        </div>
    );
}

export default HelpPreview;