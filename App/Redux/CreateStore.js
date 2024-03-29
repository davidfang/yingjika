import { createStore, applyMiddleware, compose } from 'redux'
import RehydrationServices from '../Services/RehydrationServices'
import ReduxPersist from '../Config/ReduxPersist'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import WebsocketService from '../Services/WebsocketService'
import devTools from 'remote-redux-devtools'
import { Platform } from 'react-native'
// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)
  const wsSagaMiddleware = createSagaMiddleware(WebsocketService.websocketSagas)
  middleware.push(wsSagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers,
                  devTools({
                    name: Platform.OS,
                    hostname: 'localhost',
                    port: 5678
                  })
                ))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)
  let websocketSagaManager = wsSagaMiddleware.run(WebsocketService.websocketSagas)

  return {
    store,
    sagasManager,
    websocketSagaManager,
    sagaMiddleware
  }
}
