import React from 'react';
import moment from 'moment';
import './styles.css';

moment.lang('ru');

const Task = ({ onClick, data: {
  title,
  datetime,
  place: { lat, lng },
  sum,
}}) => <div className="task-item" onClick={onClick}>
  <div className="map-view">
    <img width="100" src={`https://static-maps.yandex.ru/1.x/?ll=${lat},${lng}&size=100,100&z=14&l=map&pt=${lat},${lng},pm2blm`} alt="Task" />
  </div>

  <div className="task-content">
    <div className="task-title">{title}</div>
    <div className="task-time">{moment(datetime).fromNow()}</div>
    <div className="task-price">{sum} ₽</div>
  </div>
</div>;

export default Task;
