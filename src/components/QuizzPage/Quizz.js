import React, { useEffect, useState } from "react";
import QuizzService from "../../servives/QuizzService";
import "./Quizz.css"
import { useLocation } from "react-router-dom";

const Quizz = () => {
    const location = useLocation();
    const [question, setQuestion] = useState({});
    const getQuizzOftheWeek = async() => {
        const weekQuestion = await QuizzService.getQuizzOfTheWeek();
        console.log(weekQuestion.data);
        setQuestion(weekQuestion.data);
    }

    useEffect(()=>{
        getQuizzOftheWeek()
    }, []);
    const handleAnswerOptionClick = (answerOption) =>{
        if (answerOption) {
			console.log(answerOption);
		}

    }

    return (
        <div className='app'>
         
            { question.responses != null &&  <>
                 
                    <div className='question-section'>
                    <div className='question-count'>
                        <span>{question.title}</span> 
                    </div>
                    <div className='question-text'>{question.content}</div> 
                </div>
                <div className='answer-section'>
                      {question.responses.map((answerOption) => (
                        <button onClick={() => handleAnswerOptionClick(answerOption)} key={answerOption.id} >{answerOption.content}</button>
                    ))}  
                </div>
            </>
            }
        
    </div>
    );
}

export default Quizz
