import React from 'react'
import { Tooltip } from 'antd'
import { TinyArea } from '@ant-design/plots'
import { InfoCircleOutlined } from '@ant-design/icons'
import styles from './VisitorsCard.module.less'

export default function VisitorsCard({ data }) {
  const graphConfig = {
    height: 46,
    data: data.visitorsData,
    smooth: true,
    areaStyle: {
      fill: '#c6a7f0',
    },
    line: {
      color: '#c6a7f0'
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>访问量</span>
        <Tooltip trigger="hover" title="指标说明">
          <InfoCircleOutlined className={styles.notiIcon} />
        </Tooltip>
      </div>
      <div className={styles.data}>{data.todayVisitors.toLocaleString()}</div>
      <div className={styles.graph}>
        <TinyArea {...graphConfig} />
      </div>
      <div className={styles.bottomWrapper}>
        日访问量 {data.averageVisitors.toLocaleString()}
      </div>
    </div>
  )
}
