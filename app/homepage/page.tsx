'use client';
import Card from '../components/Card';
import stylesPage from '../page.module.css';
import Link from 'next/link';
import Template from '../components/Template';
import { useState } from 'react';

export default function Homepage() {
  const [username, setUsername] = useState('');
  const handleUsername = (event) => setUsername(event.target.value);

  return (
    <Template>
      <Card headerTitle="Test your knowloge" headerSubtitle="about The Office">
        <p className={stylesPage.startpage_p}>Who is playing?</p>

        <form className={stylesPage.form}>
          <input type="text" placeholder="Type your name here" className={stylesPage.startpage_input} onChange={handleUsername} />

          <Link className={stylesPage.btn_main} href={{ pathname: '/game', query: { name: `${username}` } }}>
            Play!
          </Link>
        </form>
      </Card>
    </Template>
  );
}
