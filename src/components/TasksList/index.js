import React from 'react';
import Task from 'components/Task';
import './styles.css';

const TaskList = () => <div className="tasks-list">
  <div className="section-1">
    <div className="tasks-title">Задания</div>

    <div>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>

    <div className="tasks-more-line">
      <span>Показать все</span>
    </div>
  </div>
</div>;

export default TaskList;
