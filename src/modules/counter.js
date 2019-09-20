import {createAction, handleActions} from "redux-actions";
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects'

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

function* increaseSaga() {
    yield delay(1000);
    yield put(increase()); // action dispatch
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga(){
    // 모든 action 에 대해 작업 처리
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // 기존의 작업중이던 작업이 있다면, 작업을 취소하고 마지막으로 실행된 작업 수행
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = {
    value: 0
};

const counter = handleActions({
        [INCREASE]: (state) => ({
            value: state.value + 1
        }),

        [DECREASE]: (state) => ({
            value: state.value - 1
        })
    },
    initialState
);

export default counter;