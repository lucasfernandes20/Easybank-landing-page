import React from 'react';
import { Section, H1, Div } from './styles';
import ArticleCard from '../AticleCard';
import articles from '../../data/Articles';

const ArticleList = () => (
  <Section id="Blog">
    <H1>
      Latest Articles
    </H1>
    <Div>
      {
      articles.map((e) => <ArticleCard key={e.img} article={e} />)
    }
    </Div>
  </Section>
);

export default ArticleList;
