import {createStore, compose} from 'redux';

import Reactotron from '../config/reactotron';

import rootRecuder from './modules/rootReducer';

const store = createStore(rootRecuder, compose(Reactotron.createEnhancer()));

export default store;
