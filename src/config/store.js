import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                         //eslint-disable-next-line no-mixed-operators
                         && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
                         //eslint-disable-next-line no-mixed-operators
                         || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)))

//if (module.hot) {
//  // Enable Webpack hot module replacement for reducers
//  module.hot.accept('../reducers', () => {
//    const nextRootReducer = require('../reducers')
//    store.replaceReducer(nextRootReducer)
//  })
//
//  // Enable Webpack hot module replacement for sagas
//  let sagaTask = sagaMiddleware.run(function* () {
//    yield rootSaga()
//  })
//  module.hot.accept('../sagas', () => {
//    const getNewSagas = require('../sagas')
//    sagaTask.cancel()
//    sagaTask.done.then(() => {
//      sagaTask = sagaMiddleware.run(function* replacedSaga(action) {
//        yield getNewSagas()
//      })
//    })
//  })
//}

sagaMiddleware.run(rootSaga)

export default store
