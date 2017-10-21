import React from 'react';
import { Switch, Route } from 'react-router';
import TaskList from 'containers/TasksList';
import NewsList from 'containers/NewsList';
import AddNewsButton from 'containers/AddNewsButton';
import AddNewsForm from 'containers/AddNewsForm';
import Modal from 'containers/Modal';

const Home = () => <div>
  <TaskList />
  <NewsList />
  <AddNewsButton />
  <Modal modalId="addNews">
    <AddNewsForm />
  </Modal>
</div>;

export default Home;
