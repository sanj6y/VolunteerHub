import { Link } from "react-router-dom";
// src/components/EventForm.js

import React, { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const EventForm = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [certified, setCertified] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Process form data
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="eventName">Event Name</Label>
        <Input
          type="text"
          name="eventName"
          id="eventName"
          placeholder="Enter event name"
          value={eventName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEventName(e.target.value)
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="eventDate">Date</Label>
        <DatePicker
          selected={eventDate}
          onChange={(date: Date) => setEventDate(date)}
          dateFormat="MM/dd/yyyy"
          className="form-control"
        />
      </FormGroup>
      <FormGroup>
        <Label for="startTime">Start Time</Label>
        <Input
          type="time"
          name="startTime"
          id="startTime"
          value={startTime}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setStartTime(e.target.value)
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="endTime">End Time</Label>
        <Input
          type="time"
          name="endTime"
          id="endTime"
          value={endTime}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEndTime(e.target.value)
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder="Enter event description"
          value={description}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDescription(e.target.value)
          }
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          type="text"
          name="location"
          id="location"
          placeholder="Enter event location"
          value={location}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLocation(e.target.value)
          }
        />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            id="certified"
            checked={certified}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCertified(e.target.checked)
            }
          />{" "}
          Certified
        </Label>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default EventForm;
