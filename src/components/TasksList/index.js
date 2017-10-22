import React from 'react';
import Task from 'components/Task';
import './styles.css';

const TaskList = ({ tasks, openModal, attachTaskAddForm }) => <div className="tasks-list">
  <div className="section-1">
    <div className="tasks-title">Задания</div>

    <div>
      {tasks.map(task=> <Task
        key={task.id}
        data={task}
        onClick={() => {
          openModal('addNews');
          attachTaskAddForm(task);
        }}
      />)}
    </div>

    <div className="tasks-more-line">
      <span>Показать все</span>
    </div>
  </div>
</div>;

export default TaskList;
