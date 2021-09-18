import React from 'react';
import PropTypes from 'prop-types';
import {
  Div, H2, Img, P, Span, Content,
} from './styles';

const ArticleCard = ({ article }) => (
  <Div>
    <Img src={article.img} />
    <Content>
      <Span>{article.span}</Span>
      <H2>{article.title}</H2>
      <P>{article.p}</P>
    </Content>
  </Div>
);

ArticleCard.propTypes = {
  article: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ArticleCard;
