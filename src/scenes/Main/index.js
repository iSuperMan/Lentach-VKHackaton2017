import React from 'react';
import { Switch, Route } from 'react-router';
import TaskList from 'containers/TasksList';
import NewsList from 'containers/NewsList';
import AddNewsButton from 'containers/AddNewsButton';

const Home = () => <div>
  <TaskList />
  <NewsList />
  <AddNewsButton />
</div>;

export default Home;
