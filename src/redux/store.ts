import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import  thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { itemsReducer } from "./items-reducer";


let rootReducer = combineReducers({
    itemsPage: itemsReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>