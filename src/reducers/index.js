import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';
import { reducers as tasks } from 'containers/TasksList';
import { reducers as news } from 'containers/NewsList';
import { reducers as modal } from 'containers/Modal';
import entities from './entities';

export const getNews = state => state.news;
export const getTasks = state => state.tasks;
export const getModal = state => state.modal;
export const getEntities = state => state.entities;

const reducers = combineReducers({
	form,
	router,
	tasks,
	entities,
	news,
	modal,
});

export default reducers;
