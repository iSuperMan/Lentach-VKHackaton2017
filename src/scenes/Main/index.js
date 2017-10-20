import React from 'react';
import { Switch, Route } from 'react-router';
import TaskList from 'components/TasksList';

const Home = () => <div>
  <TaskList />
</div>;

export default Home;
