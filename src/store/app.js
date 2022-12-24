import { call, put } from 'redux-saga/effects'
import { createSlice } from '@reduxjs/toolkit'
import { message } from 'antd'
import { getUserData } from '@/Services'

const initialState = {
  userInfo: {
    uid: 0,
    name: '',
    sex: 'male',
    authority: 0,
  },
}
export function* fetchUserInfo() {
  try {
    const data = yield call(getUserData)
    console.log('getUserData', data)
    yield put({ type: 'app/fetchUserInfoReducer', payload: data })
  } catch (e) {
    message.error('fetchUserInfo 出错了', e.message)
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    fetchUserInfoReducer(state, { payload }) {
      console.log('payload', payload)
      state.userInfo = payload
    },
  },
})

export const {} = appSlice.actions

export default appSlice.reducer
