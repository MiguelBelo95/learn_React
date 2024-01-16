import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Question({ onSelectAnswer, onSkip, keyIndex }) {

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  })

  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[keyIndex].answers[0] === answer
      })

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);


    }, 1000);
  }

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }


  return <div id="question">
    <QuestionTimer
      key={timer}
      timeout={timer}
      mode={answerState}
      onTimeout={answer.selectedAnswer === '' ? onSkip : null} />
    <h2>{QUESTIONS[keyIndex].text}</h2>
    <Answers
      answers={QUESTIONS[keyIndex].answers}
      selectedAnswer={answer.selectedAnswer}
      answerState={answerState}
      onSelect={handleSelectAnswer}
    />
  </div>
}
