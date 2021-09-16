import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import About from '../components/About';
import ArticleList from '../components/ArticleList';

const LandingPage = () => (
  <main>
    <Header />
    <Hero />
    <Introduction />
    <About />
    <ArticleList />
  </main>
);

export default LandingPage;
