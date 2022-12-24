import { call, put } from 'redux-saga/effects'
import { createSlice } from '@reduxjs/toolkit'
import { getDashboardData } from '@/Services'

const initialState = {
  loading: true,
  salesData: {
    sales: 0,
    weeklyCompare: 0,
    dailyCompare: 0,
    dailySales: 0,
  },
  visitorsData: {
    todayVisitors: 0,
    averageVisitors: 0,
    visitorsData: [],
  },
  paymentsData: {
    todayPayments: 0,
    transRate: 0,
    paymentsData: [],
  },
  businessData: {
    today: 0,
    weeklyCompare: 0,
    dailyCompare: 0,
  },
}

export function* fetchDashboardInfo() {
  try {
    const data = yield call(getDashboardData)
    yield put({ type: 'dashboard/fetchDashboardInfoReducer', payload: data })
  } catch (e) {
    yield put({ type: 'dashboard/setLoading', loading: false })
  }
}


export const counterSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchDashboardInfoReducer(state, { payload }) {
      state.salesData = payload.salesData
      state.visitorsData = payload.visitorsData
      state.paymentsData = payload.paymentsData
      state.businessData = payload.businessData
      state.loading = false
    },
    setLoading(state, { loading }) {
      console.log('loading', loading)
      state.loading = loading
    },
  },
})

// export const {} = counterSlice.actions

export default counterSlice.reducer
