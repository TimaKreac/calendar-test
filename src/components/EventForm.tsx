import React, { useState } from 'react'
import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import { rules } from '../utils/rules'

interface EventFormProps {}

const EventForm: React.FC<EventFormProps> = () => {
  const [description, setDescription] = useState('')

  return (
    <Form>
      <Form.Item
        label='Описание события'
        name='description'
        rules={[rules.required()]}
      >
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Item>
      <Form.Item label='Дата события' name='date' rules={[rules.required()]}>
        <DatePicker onChange={() => {}} />
      </Form.Item>
      <Form.Item label='Дата события' name='date' rules={[rules.required()]}>
        <Select>
          <Select.Option value='jack'>Jack</Select.Option>
          <Select.Option value='lucy'>Lucy</Select.Option>
          <Select.Option value='disabled' disabled>
            Disabled
          </Select.Option>
          <Select.Option value='Yiminghe'>yiminghe</Select.Option>
        </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm
