import './footer.css';
import { IoEarth } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Logo from "../../assets/images/logo.png";
import { AiFillCaretRight } from "react-icons/ai";


const Footer = () => {
    const otherLinks = [
        {
            title: "About Us"
        },
        {
            title: "Help Us"
        },
        {
            title: "Privacy Policy"
        },
        {
            title: "Terms & Conditions"
        }
    ];
    const ourPartners = [
        {
            title: "PDOP",
            link: "https://pendownonpaper.netlify.app/"
        },
        {
            title: "HitchDoc",
            link: "https://hitchdoc.vercel.app/"
        },
        {
            title: "OneHowl",
            link: "https://onehowl.vercel.app/"
        },
        {
            title: "Dunphy",
            link: "https://dunphy.netlify.app/"
        },
    ];
    const connectWithUs = [
        {
            icon: <FaLinkedin className='connectLogo' />,
            title: "Linkedin",
            link: "https://www.linkedin.com/in/chhabranuj/"
        },
        {
            icon: <IoEarth className='connectLogo' />,
            title: "Know Us",
            link: "https://chhabranuj.netlify.app/"
        },
        {
            icon: <FaGithub className='connectLogo' />,
            title: "Github",
            link: "https://github.com/chhabranuj/"
        },
        {
            icon: <IoLogoWhatsapp className='connectLogo' />,
            title: "Whatsapp",
            link: "https://wa.me/7217746275/"
        },
    ];


    return (
        <div className='footerParent'>
            <div className='footerChild'>
                <div className='aboutParent'>
                    <div className='titleAndLogo'>
                        <img className='logo' src={Logo} />
                        <p className='title'>Tradicious</p>
                    </div>
                    <p className='disclaimer'><span style={{color: "#9467fe"}}>Disclaimer:</span> Investment in securities market are subject to market risks, read all the related documents carefully before investing. Any opinions, chats, messages, news, research, analyses, prices, or other information contained on this Website are provided as general market information for educational and entertainment purposes only, and do not constitute investment advice.</p>
                </div>
                <div className='footerContainerParent'>
                    <div className='footerContainer'>
                        <p className='footerContainerTitle'>Other Links</p>
                        <hr className='footerContainerDivider' align="left" />
                        <div>
                            { 
                                otherLinks.map((item, index) => {    
                                    return (
                                        <div key={index} className='footerContainerContent'>
                                            <AiFillCaretRight className='contentIcon' />
                                            <p className='contentText'>{item.title}</p>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='footerMiddleContainer'>
                        <p className='footerContainerTitle'>Our Partners</p>
                        <hr className='footerContainerDivider' align="left" />
                        { 
                            ourPartners.map((item, index) => {    
                                return (
                                    <div key={index} className='footerMiddleContainerContent' onClick={() => {window.open(`${item.link}`, "_blank")}}>
                                        <AiFillCaretRight className='middleContainerContentIcon' />
                                        <p className='middleContainerText'>{item.title}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className='lastFooterContainer'>
                        <p className='footerContainerTitle'>Connect With Us</p>
                        <hr className='footerContainerDivider' align="left" />
                        { 
                            connectWithUs.map((item, index) => {    
                                return (
                                    <div key={index} className='footerContainerContent' onClick={() => {window.open(`${item.link}`, "_blank")}}>
                                        {item.icon}
                                        <p className='contentText'>{item.title}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='copyRightParent'>
                <p className='copyRightText'>Copyright © 2023 <span style={{textDecoration: "underline", cursor: "pointer"}} onClick={() => window.open("https://chhabranuj.netlify.app/", "_blank")}>Tradicious</span>. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;