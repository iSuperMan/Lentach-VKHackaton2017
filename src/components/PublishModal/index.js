import React from 'react';
import moneyIcon from './money-icon.png';
import './styles.css';

const AddNewsForm = ({ onVkButtonClick }) => <div className="publish-modal">
  <div className="publish-modal-img">
    <img src={moneyIcon}/>
  </div>

  <div className="publish-modal-header">
    Выберите способ публикации
  </div>

  <div className="publish-modal-description">
    Оплата за материалы приходит только авторизированным пользователям
  </div>

  <div className="publish-modal-vk-button">
    <button onClick={onVkButtonClick}>Войти через VK</button>
  </div>

  <div className="publish-modal-anonym-button">
    <button>Опубликовать анонимно</button>
  </div>
</div>;

export default AddNewsForm;
