import React from 'react';
import './Css/App.css';
import Header from './Components/Header.js';
import Quiz from './Components/Quiz.js';
import { QuizStatus } from './Components/StatusContext';
import Footer from './Components/Footer.js';

function App() {

    return (
        <>
        <div className="body">
            <Header/>
            <div className="main">
                <QuizStatus>
                    <Quiz></Quiz>
                </QuizStatus>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
}

export default App;