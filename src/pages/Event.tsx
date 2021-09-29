import React, { useState } from 'react'
import { Button, Modal, Row } from 'antd'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'

interface EventProps {}

const Event: React.FC<EventProps> = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div>
      <EventCalendar events={[]} />
      <Row justify='center'>
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
        <Modal
          title='Добавить событие'
          visible={modalVisible}
          footer={null}
          onCancel={() => setModalVisible(false)}
        >
          <EventForm />
        </Modal>
      </Row>
    </div>
  )
}

export default Event
