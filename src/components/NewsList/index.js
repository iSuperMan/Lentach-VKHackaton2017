import React from 'react';
import News from 'components/News';
import './styles.css';

const NewsList = ({ news }) => <div className="news-list">
  <div className="section-1">
    {news.map(news => <News key={news.id} data={news} />)}
  </div>
</div>;

export default NewsList;
