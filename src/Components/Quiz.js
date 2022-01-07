import React from 'react';
import style from '../Css/Quiz.module.css';
import Answer from './Answer.js';
import { StatusContext } from './StatusContext.js';

function Quiz() {

    const quiz = React.useContext(StatusContext);

    return (
    <>
        <div className={style.welcome}>
            {quiz.status ? (
                <div>
                    <Answer></Answer>
                </div>
            ) : (
                <div className={style.subdiv}>
                    <h2 className={style.message}>Bem vindo ao Quiz</h2>
                    <button className={style.start} onClick={() => quiz.True()}>Iniciar</button>
                </div>
            )}
        </div>
    </>
    )
}

export default Quiz;