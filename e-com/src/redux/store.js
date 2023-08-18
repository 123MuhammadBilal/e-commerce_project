// store.js
import { createStore } from 'redux';
import { userProfileDetails } from './reducer';
export const store = createStore(userProfileDetails);
