import React from 'react';
import './styles.css';

const Task = () => <div className="task-item">
  <div className="map-view">
    {/* <div className="imageT"></div> */}
    <img width="100" src="https://static-maps.yandex.ru/1.x/?ll=37.620070,55.753630&size=100,100&z=14&l=map&pt=37.620070,55.753630,pm2blm" alt="Google Map of Albany, NY" />
  </div>

  <div className="task-content">
    <div className="task-title">Найдите Навального и сфотографируйте</div>
    <div className="task-time">в течение 2 ч</div>
    <div className="task-price">5 000 ₽</div>
  </div>
</div>;

export default Task;
