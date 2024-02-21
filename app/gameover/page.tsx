'use client';

import Card from '../components/Card';
import Template from '../components/Template';
import stylesPage from '../page.module.css';
import config from '../questions.json';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const questions = config.questions;

export default function GameOver() {
  const searchParams = useSearchParams();
  let gifUrl;
  let endText;
  let titleChange;
  let answers = Number(searchParams.get('rightAnswers'));

  if (answers > 6) {
    titleChange = 'Congrats!';
    endText = `Wow, ${searchParams.get('name')}! You got ${searchParams.get('rightAnswers')} out of ${
      questions.length
    } questions right. Are you sure you don't work for Dunder Mifflin?`;
    gifUrl = 'https://media4.giphy.com/media/QTAVEex4ANH1pcdg16/giphy.gif';
  } else {
    titleChange = 'Not quite so good!';
    endText = `Oh no,  ${searchParams.get('name')}! You only got ${searchParams.get('rightAnswers')} out of ${
      questions.length
    } questions right. How about practicing some more?`;
    gifUrl =
      'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHhibW02dmZrdTc0d3NycGVzMnF5NGlpM2szY21lMWoxZWwxb21ubSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TY3bikeN6R4DS2wpcN/giphy.gif';
  }

  return (
    <Template>
      <div className={stylesPage.questionsTamplate}>
        <Card headerTitle={titleChange} headerSubtitle={''}>
          <p className={stylesPage.text}>{endText}</p>
          <Link className={stylesPage.btn_main} href="/homepage">
            Try Again!
          </Link>
        </Card>
        <div className={stylesPage.resultImage}>
          <img src={gifUrl} alt="End gif" />
        </div>
      </div>
    </Template>
  );
}
