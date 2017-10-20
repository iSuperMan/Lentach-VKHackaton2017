import React from 'react';
import News from 'components/News';
import './styles.css';

const NewsList = () => <div className="news-list">
  <div className="section-1">
    <News />
    <News />
    <News />
    <News />
    <News />
  </div>
</div>;

export default NewsList;
