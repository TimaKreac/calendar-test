import React from 'react'
import { Layout, Row, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { RouteNames } from '../routes'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'
import { useActions } from '../hooks/useActions'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const router = useHistory()
  const { isAuth, user } = useTypedSelector((state) => state.auth)
  const { login, logout } = useActions()

  return (
    <Layout.Header>
      {isAuth ? (
        <Row justify='end'>
          <div style={{ color: 'white' }}>{user.username}</div>
          <Menu
            theme='dark'
            mode='horizontal'
            selectable={false}
            style={{ display: 'flex', justifyContent: 'end' }}
          >
            <Menu.Item onClick={logout} key='1'>
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
