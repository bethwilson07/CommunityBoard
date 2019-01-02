import React from 'react';
import {Button, Header, Segment, Form} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'


const EventForm =(props) => {

  const handleSubmit = (event) => {
    event.persist()
    props.history.push("/group/events")
    props.onSubmit(event)
  }

  return(
    <div>

    <Segment className="form">
        <Header as='h3'>Create A New Event</Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field onChange={props.onChange}>
            <label>Event Name</label>
            <input name='formName' placeholder='Event Name' />
          </Form.Field>
          <Form.Field onChange={props.onChange}>
            <label>Photo Url</label>
            <input name="formPhoto" defaultValue={`${props.photo}`} placeholder="Photo Url" />
          </Form.Field>
          <Form.Field onChange={props.onChange}>
            <label>Location</label>
            <input name='formLocation' placeholder="Location" />
          </Form.Field>
          <Form.Field onChange={props.onChange}>
            <label>Date & Time</label>
            <input name='formTime' placeholder="date and time" />
          </Form.Field >
          <Form.TextArea label="Description" name="formDescription"placeholder="Description" onChange={props.onChange} />
          <Button className="create" type='submit'>Create Event</Button>
        </Form>
      </Segment>

    </div>
  )
}

export default EventForm;
