import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Skeleton } from 'antd'

import styles from './Home.module.less'
import SalesCard from './Components/SalesCard'
import VisitorsCard from './Components/VisitorsCard'
import PaymentsCard from './Components/PaymentsCard'
import BusinessCard from './Components/BusinessCard'
import WordCloudCard from './Components/WordCloudCard'
import Loading from '@/Components/Loading'

import { fetchDashboardInfoAction } from '@/store/dashboard'

export default function Home() {
  const dashboardData = useSelector((state) => state.dashboard)
  const { salesData, visitorsData, paymentsData, businessData, loading } =
    dashboardData
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDashboardInfoAction())
  }, [])
  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.topCards}>
          <SalesCard data={salesData} />
          <VisitorsCard data={visitorsData} />
          <PaymentsCard data={paymentsData} />
          <BusinessCard data={businessData} />
        </div>
        <WordCloudCard />
      </div>
    )
  }
}
