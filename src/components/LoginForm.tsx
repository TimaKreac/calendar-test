import React from 'react'
import { Button, Form, Input } from 'antd'
import { rules } from '../utils/rules'
interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <Form>
      <Form.Item
        label='Имя пользователя'
        name='username'
        rules={[rules.required('Пожалуйства введите имя пользователя!')]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Пароль'
        name='password'
        rules={[rules.required('Пожалуйства введите пароль!')]}
      >
        <Input.Password />
      </Form.Item>
      <Button type='primary' htmlType='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default LoginForm
