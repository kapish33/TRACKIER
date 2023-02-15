import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cardSlice from './redux/cardSlice';
import statusSlice from './redux/statusSlice';
import taskSlice from './redux/taskSlice';
import userSlice from './redux/userSlice';

const rootReducer = combineReducers({
  cards: cardSlice,
  user: userSlice,
  status: statusSlice,
  task: taskSlice,
});

const persistConfig = {
  key: 'TRACKIER',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
const persistor = persistStore(store);
export { store, persistor };
