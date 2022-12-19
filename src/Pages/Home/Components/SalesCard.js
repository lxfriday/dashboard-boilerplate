import React from 'react'
import { Tooltip } from 'antd'
import {
  InfoCircleOutlined,
  CaretUpFilled,
  CaretDownFilled,
} from '@ant-design/icons'
import styles from './SalesCard.module.less'

export default function SalesCard({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>总销售额</span>
        <Tooltip trigger="hover" title="指标说明">
          <InfoCircleOutlined className={styles.notiIcon} />
        </Tooltip>
      </div>
      <div className={styles.sales}>¥ {data.sales.toLocaleString()}</div>
      <div className={styles.compareWrapper}>
        <div className={styles.weeklyCompare}>
          周同比 {Math.abs(data.weeklyCompare)}%{' '}
          {data.weeklyCompare > 0 ? (
            <CaretUpFilled className={styles.green} />
          ) : (
            <CaretDownFilled className={styles.red} />
          )}
        </div>
        <div className={styles.dailyCompare}>
          日同比 {Math.abs(data.dailyCompare)}%
          {data.dailyCompare > 0 ? (
            <CaretUpFilled className={styles.green} />
          ) : (
            <CaretDownFilled className={styles.red} />
          )}
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        日销售额 ¥ {data.dailySales.toLocaleString()}
      </div>
    </div>
  )
}
