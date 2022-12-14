import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger'
import app from "./app";

export const store = configureStore({
  reducer: {
    app,
  },
  middleware: [__DEV__ && createLogger()].filter(m => !!m),
});
