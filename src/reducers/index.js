import { combineReducers } from 'redux';
import {LOADING_TASK, LOADED_TASK, FAILED_TO_LOAD_TASK} from '../actions/tasks';

function taskReducer(state = {}, action) {
    const newState = {...state}

    switch (action.type) {
        case LOADING_TASK:
            newState[action.id] = {loading: true};
            break;
        case LOADED_TASK:
            newState[action.id] = action.data;
            break;
        case FAILED_TO_LOAD_TASK:
            newState[action.id] = {error: action.error};
    }

    return newState;
}

export default combineReducers({tasks: taskReducer});
