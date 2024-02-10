import Head from 'next/head';
import Homepage from './homepage/page';

export default function Page() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />;
    </>
  );
}
