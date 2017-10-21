import React from 'react';
import './styles.css';

const AddNewsButton = ({ onClick }) => <div className="add-news-button" onClick={onClick}>
  <i className="fa fa-plus" aria-hidden="true"></i>
  <span>
    Добавить материал
  </span>
</div>;

export default AddNewsButton;
