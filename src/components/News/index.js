import React from 'react';
import moment from 'moment';
import './styles.css';

moment.lang('ru')

const News = ({ onVoteUp, onVoteDown, data: {
  description,
  datetime,
  mediaIds,
  rating: { isLiked, up, down, isVoted },
  user,
}}) => <div className="news-item">
  <div className="news-header">
    <img className="news-user-avatar" src={user.imgSrc}/>

    <div className="news-header-info">
      <div className="news-header-user-name">
        {`${user.first_name} ${user.last_name}`}
      </div>
      <div className="news-header-datetime">
        {moment(datetime).fromNow()}
      </div>
    </div>

    {/* <div className="news-payment-sum">
      5 000 ₽
    </div> */}
  </div>

  <div className="news-description">
    {description}
  </div>

  <div className="news-photo-wrapper">
    <div className="news-photo">
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
