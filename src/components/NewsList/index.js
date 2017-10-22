import React from 'react';
import News from 'components/News';
import './styles.css';

const NewsList = ({ news, putVoteDownNews, putVoteUpNews, getNews }) => <div className="news-list">
  <div className="section-1">
    {news.map(news => <News
      key={news.id}
      data={news}
      onVoteUp={() => putVoteUpNews({ id: news.id }).then(() => getNews())}
      onVoteDown={() => putVoteDownNews({ id: news.id }).then(() => getNews())}
    />)}
  </div>
</div>;

export default NewsList;
