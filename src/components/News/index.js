import React from 'react';
import moment from 'moment';
import './styles.css';

moment.lang('ru')

const News = ({ data: {
  description,
  date,
}}) => <div className="news-item">
  <div className="news-header">
    <div className="news-user-avatar"></div>

    <div className="news-header-info">
      <div className="news-header-user-name">
        Алина Лонова
      </div>
      <div className="news-header-datetime">
        {moment(date).fromNow()}
      </div>
    </div>

    <div className="news-payment-sum">
      5 000 ₽
    </div>
  </div>

  <div className="news-description">
    {description}
  </div>

  <div className="news-photo-wrapper">
    <div className="news-photo">
    </div>

    <div className="news-photo-counter">
      <div className="news-photo-counter-value">13</div>
      <div className="news-photo-counter-text">фото</div>
    </div>
  </div>

  <div className="news-bottom">
    {/* <div>
      <div className="news-bottom-result">50%</div>

      <div>
        <div className="news-bottom-result-part active">
          Правда
        </div>
        <div className="news-bottom-result-part">
          Ложь
        </div>
      </div>
    </div> */}

    <div>
      <div className="news-bottom-vote-part">
        👍🏻 Правда
      </div>
      <div className="news-bottom-vote-part">
        👎🏻 Ложь
      </div>
    </div>
  </div>
</div>;

export default News;
