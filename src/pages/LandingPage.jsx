import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import About from '../components/About';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer';
import Div from '../GlobalStyles';

const LandingPage = () => (
  <main>
    <Header />
    <Div>
      <Hero />
      <Introduction />
    </Div>
    <About />
    <ArticleList />
    <Footer />
  </main>
);

export default LandingPage;
