import { combineReducers } from 'redux';
import post_reducer from './post_reducer';
import { reducer as form} from 'redux-form';

const rootReducer = combineReducers({
    post_reducer, form
})

export default rootReducer;