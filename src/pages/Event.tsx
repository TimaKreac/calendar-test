import React, { useEffect, useState } from 'react'
import { Button, Layout, Modal, Row } from 'antd'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'

interface EventProps {}

const Event: React.FC<EventProps> = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const { fetchGuests, createEvent, fetchEvents } = useActions()
  const { guests, events } = useTypedSelector((state) => state.event)
  const { user } = useTypedSelector((state) => state.auth)

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  }, [fetchGuests, fetchEvents, user])

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false)
    createEvent(event)
  }

  return (
    <Layout>
      {JSON.stringify(events)}
      <EventCalendar events={[]} />
      <Row justify='center'>
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
        <Modal
          title='Добавить событие'
          visible={modalVisible}
          footer={null}
          onCancel={() => setModalVisible(false)}
        >
          <EventForm guests={guests} submit={addNewEvent} />
        </Modal>
      </Row>
    </Layout>
  )
}

export default Event
