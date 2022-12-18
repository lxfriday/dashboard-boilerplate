import React, { useState, useEffect } from 'react'
import { Menu, Divider } from 'antd'
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'
import {
  QuestionCircleFilled,
  SettingFilled,
  HomeFilled,
  EditFilled,
} from '@ant-design/icons'

import styles from './Nav.module.less'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

export default function Nav() {
  const location = useLocation()
  const [selectKey, setSelectedKey] = useState('Home')
  const { pathname } = location

  const currMenu = pathname.slice(1).length ? pathname.slice(1) : 'home'
  console.log('nav info', { location, selectKey })

  function handleOpenChange(keys) {
    console.log('onOpenChange', keys)
  }
  function handleNavClick({ key }) {
    setSelectedKey(key)
  }
  const items = [
    getItem(<NavLink to="/">Home</NavLink>, 'home', <HomeFilled />),
    getItem('Todo', 'todo', <EditFilled />, [getItem('Todo1', 'todo1')]),
    getItem(
      <NavLink to="/about">About</NavLink>,
      'about',
      <QuestionCircleFilled />
    ),
    getItem(
      <NavLink to="/settings">Settings</NavLink>,
      'settings',
      <SettingFilled />
    ),
  ]

  useEffect(() => {
    setSelectedKey(currMenu)
  }, [currMenu])

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftMenu}>
        <div className={styles.app}>云影管理系统</div>
        <Divider style={{ margin: '5px 0 10px' }} />
        <Menu
          mode="inline"
          selectedKeys={[selectKey]}
          onOpenChange={handleOpenChange}
          onClick={handleNavClick}
          style={{ width: 200 }}
          items={items}
        />
      </div>
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  )
}
