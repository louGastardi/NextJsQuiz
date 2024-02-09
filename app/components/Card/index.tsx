import React from 'react';
import cardStyles from './card.module.css';

interface CardProps {
  headerTitle: string;
  headerSubtitle: string;
  children: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div className={cardStyles.card}>
      <header>
        <h1 className={cardStyles.title}>{props.headerTitle}</h1>
        <h1 className={cardStyles.subtitle}>{props.headerSubtitle}</h1>
      </header>
      <div className={cardStyles.card_body}>{props.children}</div>
    </div>
  );
}
