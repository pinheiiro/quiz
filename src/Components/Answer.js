import React, {useState} from 'react';
import style from '../Css/Answer.module.css';
import { StatusContext } from './StatusContext.js';

function Answer() {

    const questions = [
        {
            perg: 'Quando calculamos 5 x 7 o resultado é ?',
            alt: [
                {alternative: '28', resp: false},
                {alternative: '35', resp: true},
                {alternative: '36', resp: false},
                {alternative: '21', resp: false}
            ],
        },
        {
            perg: 'Qual o resto da divisão obtido ao calcular 32 ÷ 8 ?',
            alt: [
                {alternative: '8', resp: false},
                {alternative: '12', resp: false},
                {alternative: '4', resp: false},
                {alternative: '0', resp: true}
            ],
        },
        {
            perg: 'Qual o resultado da soma de 47 + 388 ?',
            alt: [
                {alternative: '425', resp: false},
                {alternative: '433', resp: false},
                {alternative: '435', resp: true},
                {alternative: '429', resp: false}
            ],
        },
        {
            perg: 'Qual o resultado da subtração de 917 - 963 ?',
            alt: [
                {alternative: '-47', resp: false},
                {alternative: '46', resp: false},
                {alternative: '-46', resp: true},
                {alternative: '53', resp: false}
            ],
        }
    ];

    const [question, setQuestion] = useState(0);
    const [sentence, setSentence] = useState(true);
    const [score, setScore] = useState(0);

    const quiz = React.useContext(StatusContext);

    const marcacao = (resp) => {
        if (resp) {
            setScore(score + 1);
        }
        const nextQuestion = question + 1;
        if (nextQuestion < questions.length){
            setQuestion(nextQuestion);
        } else {
            setSentence(false);
        }
    }

    const restart = () => {
        setQuestion(0);
        setScore(0);
        setSentence(true);
    }

    return (
        <div>
            { sentence ? (
                <div className={style.answer}>
                    <h2 className={style.questions}>{questions[question].perg}</h2>
                    <div className={style.options}>
                        {questions[question].alt.map((r) => <button key={r.alternative} onClick={() => marcacao(r.resp)} className={style.option}>{r.alternative}</button>)}
                    </div>
                </div>
            ) : (
                <div className={style.finaly}>
                    <h2 className={style.message}>Quiz Finalizado</h2>
                    <h3 className={style.message}>Score: <span className={style.acertos}>{score}</span> <span style={{fontSize: '40px'}}>/</span> <span className={style.total}>{questions.length}</span></h3>
                    <div className={style.buttons}>
                        <button onClick={restart} className={style.button}>Reiniciar</button>
                        <button onClick={() => quiz.False()} className={style.button}>Finalizar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Answer;