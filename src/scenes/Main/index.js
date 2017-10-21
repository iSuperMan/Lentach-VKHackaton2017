import React from 'react';
import { Switch, Route } from 'react-router';
import TaskList from 'components/TasksList';
import NewsList from 'components/NewsList';

const Home = () => <div>
  <TaskList />
  <NewsList />
</div>;

export default Home;
