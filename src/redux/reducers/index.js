import { combineReducers } from 'redux';

import {
    GET_CHAPTERS,
    GET_VERSES,
    SUCCESS,
    FAIL
  } from '../action-types';

const STATE_INT = {
    isLoading: true,
    chapters: [],
    verses: [],
    quoteOfTheDay: ''
};

export const rootReducer =  (state = STATE_INT, { type, payload }) => {
    switch(type) {
        case GET_CHAPTERS:
            return { ...state, isLoading: true};
        case `${GET_CHAPTERS}_${SUCCESS}`:
            return {
                ...state,
                chapters: payload,
            }
        default:
            return {
                ...state,
            }
    }
};

export default rootReducer;



  