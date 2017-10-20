import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

const reducers = combineReducers({
	form,
	router,
});

export default reducers;
