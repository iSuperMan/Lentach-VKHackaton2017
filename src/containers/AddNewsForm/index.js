import React from 'react';
import './styles.css';

const AddNewsForm = () => <div className="add-news-form">
  <div className="add-news-image-picker">
    <i className="fa fa-plus" aria-hidden="true"></i>
  </div>

  <div className="add-news-description">
    <textarea
      rows="3"
      name="text"
      placeholder="Добавьте описание…"
    />
  </div>

  <div className="add-news-submit">
    <button>Продолжить</button>
  </div>
</div>;

export default AddNewsForm;
