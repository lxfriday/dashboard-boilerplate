import React from 'react'
import { Tooltip } from 'antd'
import { TinyColumn } from '@ant-design/plots'
import { InfoCircleOutlined } from '@ant-design/icons'
import styles from './PaymentsCard.module.less'

export default function PaymentsCard({ data }) {
  const graphConfig = {
    height: 46,
    data:  data.paymentsData,
    // tooltip: {
    //   customContent: function (x, data) {
    //     return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`;
    //   },
    // },
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>支付</span>
        <Tooltip trigger="hover" title="指标说明">
          <InfoCircleOutlined className={styles.notiIcon} />
        </Tooltip>
      </div>
      <div className={styles.data}>{data.todayPayments.toLocaleString()}</div>
      <div className={styles.graph}>
        <TinyColumn {...graphConfig} />
      </div>
      <div className={styles.bottomWrapper}>转化率 {data.transRate} %</div>
    </div>
  )
}
