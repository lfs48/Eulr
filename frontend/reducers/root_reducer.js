import { combineReducers } from 'redux';
import entitiesReducer from './entities/entities_reducer';
import sessionReducer from './session/session_reducer';
import uiReducer from './ui/ui_reducer';
import errorsReducer from './errors/errors_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: uiReducer,
    errors: errorsReducer
});

export default rootReducer;