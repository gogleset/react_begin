import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    err: null,
    time: null,
    latitude: null,
    longitude: null,
    local: null,
};

const geoLocationSlice = createSlice({
    name: 'geoLocation', //해당 모듈의 이름을 작성
    initialState, //해당 모듈의 초기값 세팅
    reducers: { // 해당 리듀서의 키 값으로 액션함수가 자동으로 생성
        changeLocationValue(state, action) {
            state.err = action.payload.err;
            state.time = action.payload.time;
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        },
        changeLocalValue(state, action){
            state.local = action.payload.data;
        }
    }
});

export const { changeLocationValue, changeLocalValue } = geoLocationSlice.actions;

export default geoLocationSlice.reducer;