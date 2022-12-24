import { takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchDashboardInfo } from './dashboard'
import { fetchUserInfo } from './app'

export default function* () {
  yield takeLatest('dashboard/fetchDashboardInfoEffect', fetchDashboardInfo)
  yield takeLatest('app/fetchUserInfoEffect', fetchUserInfo)
}
