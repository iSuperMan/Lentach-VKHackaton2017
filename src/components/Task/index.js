import React from 'react';
import moment from 'moment';
import './styles.css';

moment.lang('ru');

const Task = ({ data: {
  title,
  datetime,
  place: { lat, lng },
}}) => <div className="task-item">
  <div className="map-view">
    <img width="100" src={`https://static-maps.yandex.ru/1.x/?ll=${lat},${lng}&size=100,100&z=14&l=map&pt=${lat},${lng},pm2blm`} alt="Task" />
  </div>

  <div className="task-content">
    <div className="task-title">{title}</div>
    <div className="task-time">{moment(datetime).fromNow()}</div>
    <div className="task-price">5 000 ₽</div>
  </div>
</div>;

export default Task;
