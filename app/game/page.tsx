'use client';
import React, { Suspense } from 'react';
import Card from '../components/Card';
import Template from '../components/Template';
import stylesPage from '../page.module.css';
import config from '../questions.json';
import Alternative from '../components/Alternative';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';

const questions = config.questions;

const answerStates = {
  DEFAULT: 'DEFAULT',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const;

export default function Game() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [answerState, setAnswerState] = useState<keyof typeof answerStates>(answerStates.DEFAULT);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [userRightAnswer, setUserRightAnswer] = useState(0);

  const questionNumber = currQuestion + 1;
  const question = questions[currQuestion];
  const isLastQuestion = questionNumber === questions.length;
  const username = searchParams.get('name');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Template>
        <div className={stylesPage.questionsTamplate}>
          <Card headerTitle={question.title} headerSubtitle={`Question ${questionNumber} of ${questions.length}`}>
            <form
              className={stylesPage.form}
              onSubmit={(event) => {
                event.preventDefault();

                const questionInfo = event.target as HTMLFormElement;
                const formData = new FormData(questionInfo);
                const { option } = Object.fromEntries(formData.entries());
                const isCorrect = option === question.correct_option;

                if (isCorrect) {
                  setAnswerState(answerStates.SUCCESS);
                  setUserRightAnswer(userRightAnswer + 1);
                  console.log(userRightAnswer);
                }
                if (!isCorrect) {
                  setAnswerState(answerStates.ERROR);
                }
                setTimeout(() => {
                  if (!isLastQuestion) {
                    setAnswerState(answerStates.DEFAULT);
                    setCurrQuestion(currQuestion + 1);
                  } else {
                    router.push(`/gameover?name=${encodeURIComponent(username)}&rightAnswers=${encodeURIComponent(userRightAnswer)}`);
                  }
                }, 1000);
              }}>
              {question.options.map((option, i) => (
                <Alternative key={`key-${i}`} order={i} option={option} />
              ))}
              {answerState === answerStates.DEFAULT && (
                <Button type="submit" className={stylesPage.btn_answer}>
                  Answer!
                </Button>
              )}
              <p style={{ textAlign: 'center' }}>
                {answerState === answerStates.ERROR && <div className={stylesPage.btn_answer_wrong}>✖</div>}
                {answerState === answerStates.SUCCESS && <div className={stylesPage.btn_answer_right}>✔</div>}
              </p>
            </form>
          </Card>
        </div>
      </Template>
    </Suspense>
  );
}
