import React from 'react'
import { Tooltip } from 'antd'
import { Liquid } from '@ant-design/plots'
import {
  InfoCircleOutlined,
  CaretUpFilled,
  CaretDownFilled,
} from '@ant-design/icons'
import styles from './BusinessCard.module.less'

export default function BusinessCard({ data }) {
  const graphConfig = {
    width: 100,
    percent: +(data.today / 100).toFixed(2),
    outline: {
      border: 2,
      distance: 0.5,
    },
    wave: {
      length: 32,
    },
    statistic: {
      content: {
        style: {
          fontSize: 10
        }
      }
    },
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>运营活动效果</span>
        <Tooltip trigger="hover" title="指标说明">
          <InfoCircleOutlined className={styles.notiIcon} />
        </Tooltip>
      </div>
      <div className={styles.centerWrapper}>
        <div className={styles.data}>{data.today}%</div>
        <div className={styles.graph}>
          <Liquid {...graphConfig} />
        </div>
      </div>
      <div className={styles.bottomWrapper}>
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
    </div>
  )
}
