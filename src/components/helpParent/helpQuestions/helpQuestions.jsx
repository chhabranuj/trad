import './helpQuestions.css';
import { useState } from 'react';
import { BsFillCaretDownFill } from "react-icons/bs";

const HelpQuestions = (props) => {
    const [selectedQuestion , setSelectedQuestion] = useState(false);

    const handleQuestion = () => {
        setSelectedQuestion(!selectedQuestion);
    }

    return (
        <div className='helpQuestionsParent'>
            <div className='helpQuestionsChild' onClick={handleQuestion}>
                <p className='helpQuestion' style={selectedQuestion? {color: '#9467fe'}: {color: '#362465'}}>{props.data.question}</p>
                <BsFillCaretDownFill className='helpQuestionIcon' style={selectedQuestion? {color: '#e14f4f', transform: 'rotate(180deg)'}: {color: '#9467fe'}} />
            </div>
            {selectedQuestion && <p className='helpAnswer'>{props.data.answer}</p>}
        </div>
    );
}

export default HelpQuestions;