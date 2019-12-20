import React from 'react';
import Head from 'next/head';
import '../assets/styles/styles.scss';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
    </Head>
    <h1>Welcome to Next js</h1>
  </div>
);

export default Home;
