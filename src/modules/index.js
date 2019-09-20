import {combineReducers} from "redux";
import counter, {counterSaga} from "./counter";
import {all} from "redux-saga/effects";
import loading from "../lib/loading";
import sample, {sampleSaga} from './sample'

const rootReducer = combineReducers({
    counter,
    loading,
    sample
});

export function* rootSaga() {
    yield all([counterSaga(), sampleSaga()])
}


export default rootReducer;