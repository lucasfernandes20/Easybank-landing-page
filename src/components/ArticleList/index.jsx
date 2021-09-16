import React from 'react';
import { Section, H1 } from './styles';
import ArticleCard from '../AticleCard';
import articles from '../../data/Articles';

const ArticleList = () => (
  <Section id="Blog">
    <H1>
      Latest Articles
    </H1>
    {
        articles.map((e) => <ArticleCard article={e} />)
      }
  </Section>
);

export default ArticleList;
