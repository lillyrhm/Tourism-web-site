import React from 'react';
import { useReducer } from 'react';
import * as actions from "./Action";

const initialState = {
    isShowNavbar: false,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.OPEN_NAVBAR:
            console.log("open: ", state.isShowNavbar)
            return {
                ...state,
                isShowNavbar: true
            }
        case actions.CLOSE_NAVBAR:
            console.log("close: ", state.isShowNavbar)
            return {
                ...state,
                isShowNavbar: false
            }
        default: return state;
    }
}