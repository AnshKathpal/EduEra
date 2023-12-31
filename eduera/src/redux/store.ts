import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import {reducer as authReducer} from "./Authentication/reducer"
import { authReducer } from "./Authentication/reducer";
import {reducer as programeReducer} from "./Programs/reducer"
import {reducer as universitiesReducer} from "./University/reducer"
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {reducer as adminReducer} from "./AdminReducer/reducer"
import adminAuthReducer from './AdminReducer/reducer';

const rootReducer = combineReducers({
    authReducer,
    programeReducer,
    universitiesReducer,
    adminReducer,
    auth: adminAuthReducer
    
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// type DispatchFunc = () => AppDispatch;


export const useAppDispatch: () => AppDispatch = useDispatch ;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector ;