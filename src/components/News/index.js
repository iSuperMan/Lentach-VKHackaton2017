import React from 'react';
import moment from 'moment';
import userIcon from './user.png';
import './styles.css';

moment.lang('ru')

const News = ({ onVoteUp, onVoteDown, data: {
  description,
  datetime,
  mediaIds,
  rating: { isLiked, up, down, isVoted },
  user,
  task,
}}) => <div className="news-item">
  <div className="news-header">
    <img className="news-user-avatar" src={user ? user.imgSrc : userIcon}/>

    <div className="news-header-info">
      <div className="news-header-user-name">
        {user ? `${user.first_name} ${user.last_name}` : 'Аноним'}
      </div>
      <div className="news-header-datetime">
        {moment(datetime).fromNow()}
      </div>
    </div>

    {task ? <div className="news-payment-sum">
      {task.sum} ₽
    </div> : null}
  </div>

  <div className="news-description">
    {description}
  </div>

  <div className="news-photo-wrapper">
    <div className="news-photo" style={{ backgroundImage: `url("/static/media/${mediaIds[0].id}")` }}>
    </div>

    {mediaIds.length > 1 ? <div className="news-photo-counter">
      <div className="news-photo-counter-value">{mediaIds.length}</div>
      <div className="news-photo-counter-text">фото</div>
    </div> : null}
  </div>

  <div className="news-bottom">
    {isVoted ? <div>
      {/* <div className="news-bottom-result">50%</div> */}

      <div>
        <div className={`news-bottom-result-part${isLiked ? ' active' : ''}`}>
          👍🏻 {up}
        </div>
        <div className={`news-bottom-result-part${isLiked ? '' : ' active'}`}>
          👎🏻 {down}
        </div>
      </div>
    </div> : <div>
      <div className="news-bottom-vote-part" onClick={onVoteUp}>
        👍🏻 Правда
      </div>
      <div className="news-bottom-vote-part" onClick={onVoteDown}>
        👎🏻 Ложь
      </div>
    </div>}
  </div>
</div>;

export default News;
