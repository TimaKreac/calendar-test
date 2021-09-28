import React from 'react'
import { Layout, Row, Menu } from 'antd'
import { useHistory } from 'react-router-dom'

import { RouteNames } from '../routes'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const router = useHistory()
  const { isAuth } = useTypedSelector((state) => state.auth)

  return (
    <Layout.Header>
      {isAuth ? (
        <Row justify='end'>
          <div style={{ color: 'white' }}>timakreac</div>
          <Menu
            theme='dark'
            mode='horizontal'
            selectable={false}
            style={{ display: 'flex', justifyContent: 'end' }}
          >
            <Menu.Item onClick={() => console.log('disconnect')} key='1'>
              Выйти
            </Menu.Item>
          </Menu>
        </Row>
      ) : (
        <Menu
          theme='dark'
          mode='horizontal'
          selectable={false}
          style={{ display: 'flex', justifyContent: 'end' }}
        >
          <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key='1'>
            Логин
          </Menu.Item>
        </Menu>
      )}
    </Layout.Header>
  )
}

export default Navbar
