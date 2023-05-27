import './getStarted.css';
import add from '../../assets/images/add.svg';
import signUp from '../../assets/images/signUp.svg';
import create from '../../assets/images/create.svg';

const GetStarted = () => {
    const data = [
        {
            icon: signUp,
            title: 'Sign up for free',
            para: 'Firstly you need to register for a free account on Tradicious website. It is very easy to register an account.'
        },
        {
            icon: create,
            title: 'Create a secure wallet',
            para: 'With a secure Tradicious wallet, you can safely store your funds. We will provide you funds for free.'
        },
        {
            icon: add,
            title: 'Add your Crypto',
            para: 'Finally you can add your cryptocurrency and you can freely exchange them.'
        }
    ];

    return (
        <div className='getStartedParent'>
            <p className='getStartedHeading'>Get started in just a few minutes</p>
            <p className='getStartedText'>With a few simple steps, you can start playing with your cryptocurrency today! Take a look at what it takes to become a user of <span style={{color: "#9467fe"}}>Tradicious</span>.</p>
            <div className='getStartedChild'>
                {
                    data.map((item, index) => {
                        return(
                            <div key={index} className='getStartedCardParent' style={{margin: "0.5rem"}}>
                                <img className='getStartedCardIcon' src={item.icon} loading='lazy' />
                                <p className='getStartedCardHeading'>{item.title}</p>
                                <p className='getStartedCardText'>{item.para}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default GetStarted;