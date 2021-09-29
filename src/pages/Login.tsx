import React from 'react'
import { Layout, Row } from 'antd'
import LoginForm from '../components/LoginForm'

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <Layout>
      <Row justify='center' align='middle' className='h100'>
        <LoginForm></LoginForm>
      </Row>
    </Layout>
  )
}

export default Login
