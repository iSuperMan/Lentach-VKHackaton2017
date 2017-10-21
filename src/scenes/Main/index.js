import React from 'react';
import { Switch, Route } from 'react-router';
import TaskList from 'containers/TasksList';
import NewsList from 'containers/NewsList';
import AddNewsButton from 'containers/AddNewsButton';
import AddNewsForm from 'containers/AddNewsForm';
import PublishModal from 'components/PublishModal';
import Modal from 'containers/Modal';

const Home = () => <div>
  <TaskList />
  <NewsList />
  <AddNewsButton />
  <Modal modalId="addNews" closeIcon>
    <AddNewsForm />
  </Modal>

  <Modal modalId="publishNews">
    <PublishModal />
  </Modal>
</div>;

export default Home;
