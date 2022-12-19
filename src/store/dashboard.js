import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getDashboardData } from '@/Services'
import { store } from './index'

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

export const fetchDashboardInfoAction = createAsyncThunk(
  'dashboard/fetchDashboardInfo',
  async () => {
    return await getDashboardData()
  }
)

export const counterSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardInfoAction.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(fetchDashboardInfoAction.fulfilled, (state, { payload }) => {
        state.loading = false
        state.salesData = payload.salesData
        state.visitorsData = payload.visitorsData
        state.paymentsData = payload.paymentsData
        state.businessData = payload.businessData
        console.log('fulfilled');
      })
      .addCase(fetchDashboardInfoAction.rejected, (state, { payload }) => {
        console.log('rejected');
        state.loading = false
      })
  },
})

// export const {} = counterSlice.actions

export default counterSlice.reducer
