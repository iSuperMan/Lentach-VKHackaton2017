import React from 'react';
import { Switch, Route } from 'react-router';
import TaskList from 'containers/TasksList';
import NewsList from 'containers/NewsList';

const Home = () => <div>
  <TaskList />
  <NewsList />
</div>;

export default Home;
