import{createStore, applyMiddleware,compose} from 'redux'
import rootReducer from '../reducer/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import thunk from 'redux-thunk'


const store= createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    )

export default store