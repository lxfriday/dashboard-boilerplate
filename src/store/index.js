import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import app from './app'
import dashboard from './dashboard'

export const store = configureStore({
  reducer: {
    app,
    dashboard,
  },
  middleware: [__DEV__ && createLogger(), thunk].filter((m) => !!m),
})
