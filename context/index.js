// import
import {createContext, useReducer} from 'react';

// reducer

const reducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {...state, user:action.payload}
        case 'LOGOUT':
            return {...state, user:null}
        default:
            return state;
    }

}

// initial state
const initialState={
    user:null
}

// create context
const Context =createContext({})

// create Provider
const Provider =({children})=>{
    const [state, dispatch]=useReducer(reducer, initialState);
    const value={state, dispatch}
    return <Context.Provider value ={value}>{children}</Context.Provider>
}

export {Context, Provider};