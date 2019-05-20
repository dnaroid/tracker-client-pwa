import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import SagaManager from '../helpers/sagas'
import rootReducer from '../reducers'
import { DEVELOPMENT } from './strings'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                         //eslint-disable-next-line no-mixed-operators
                         && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
                         //eslint-disable-next-line no-mixed-operators
                         || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)))

SagaManager.startSagas(sagaMiddleware)

if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    )

    module.hot.accept('../helpers/sagas', () => {
      SagaManager.cancelSagas(store)
      require('../helpers/sagas').default.startSagas(sagaMiddleware)
    })
  }
}

export default store
