import React from 'react'
import { Layout, Row, Menu } from 'antd'
import { useHistory } from 'react-router-dom'

import { RouteNames } from '../routes'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const router = useHistory()
  let auth = true

  return (
    <Layout.Header>
      {auth ? (
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
