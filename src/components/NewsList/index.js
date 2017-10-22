import React from 'react';
import { compose, withProps } from 'recompose';
import News from 'components/News';
import './styles.css';

const NewsList = ({ news, putVoteDownNews, putVoteUpNews, getNews, isLogin, likes, dislikes }) => <div className="news-list">
  <div className="section-1">
    {news.map(news => <News
      key={news.id}
      data={news}
      voteUp={likes.indexOf(news.id.toString()) !== -1}
      voteDown={dislikes.indexOf(news.id.toString()) !== -1}

      onVoteUp={() => {
        console.log('likes', likes, likes.indexOf(news.id.toString()) !== -1);
        localStorage.setItem('likes', JSON.stringify([...likes, news.id]));
        putVoteUpNews({ id: news.id }).then(() => getNews())
      }}

      onVoteDown={() => {
        console.log('dislikes', dislikes, dislikes.indexOf(news.id.toString()) !== -1);
        localStorage.setItem('dislikes', JSON.stringify([...dislikes, news.id]));
        putVoteDownNews({ id: news.id }).then(() => getNews())
      }}
    />)}
  </div>
</div>;

export default compose(
  withProps(
    () => {
      return {
        likes: JSON.parse(localStorage.getItem('likes')) || [],
        dislikes: JSON.parse(localStorage.getItem('dislikes')) || [],
      }
    }
  )
)(NewsList);
