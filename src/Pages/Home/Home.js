import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment, decrement } from '../../store/app'
import styles from './Home.module.less'

export default function Home() {
  const disdpatch = useDispatch()
  const appState = useSelector((state) => state.app)
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Home num: {appState.value}</div>
      <p>
        <button onClick={() => disdpatch(increment())}>inc+</button>
        <button onClick={() => disdpatch(decrement())}>dec+</button>
      </p>
    </div>
  )
}
