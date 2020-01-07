import { createStore } from 'redux';
import reducers from '../reducers';
import { contacts } from '../../static-data';

export const store = createStore(reducers, { contacts });