import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { rules } from '../utils/rules'
import { useDispatch } from 'react-redux'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { isLoading, error } = useTypedSelector((state) => state.auth)
  const { login } = useActions()

  const submit = () => {
    login(username, password)
  }

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item
        label='Имя пользователя'
        name='username'
        rules={[rules.required('Пожалуйства введите имя пользователя!')]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label='Пароль'
        name='password'
        rules={[rules.required('Пожалуйства введите пароль!')]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Button type='primary' htmlType='submit' loading={isLoading}>
        Submit
      </Button>
    </Form>
  )
}

export default LoginForm
