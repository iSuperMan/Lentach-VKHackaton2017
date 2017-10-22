import _ from 'lodash';
import React from 'react';
import Task from 'components/Task';
import { compose, withState } from 'recompose';
import './styles.css';

const TaskList = ({ tasks, openModal, attachTaskAddForm, showMore, setShowMore }) => <div className="tasks-list">
  <div className="section-1">
    <div className="tasks-title">Задания</div>

    <div>
      {(showMore ? tasks : _.take(tasks, 4)).map(task=> <Task
        key={task.id}
        data={task}
        onClick={() => {
          openModal('addNews');
          attachTaskAddForm(task);
        }}
      />)}
    </div>

    <div className="tasks-more-line">
      {!showMore
        ? <span onClick={() => setShowMore(true)}>Показать все</span>
        : <span onClick={() => setShowMore(false)}>Скрыть</span>}
    </div>
  </div>
</div>;

export default compose(
  withState('showMore', 'setShowMore', false),
)(TaskList);
