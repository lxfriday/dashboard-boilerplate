import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import app from './app'
import dashboard from './dashboard'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    app,
    dashboard,
  },
  middleware: [__DEV__ && createLogger(), sagaMiddleware].filter(
    (m) => !!m
  ),
})

sagaMiddleware.run(sagas)