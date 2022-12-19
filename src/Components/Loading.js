import React from 'react'
import MoonLoader from 'react-spinners/MoonLoader'

import styles from './Loading.module.less'

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <MoonLoader
        color="rgb(54, 215, 183)"
        loading
        size={150}
      />
    </div>
  )
}
