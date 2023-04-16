import { Link } from "react-router-dom";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../backend/firebase_config";
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
  const [certified, setCertified] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [isInPerson, setIsInPerson] = useState(false);
  const [address, setAddress] = useState("");
  const [numLikes, setNumLikes] = useState(0);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let info = {
      name: eventName,
      date: eventDate,
      start: startTime,
      end: endTime,
      description: description,
      cert: certified,
      online: isOnline,
      inperson: isInPerson,
      addy: address,
      numLikes: numLikes
    }
    addDoc(collection(db, 'events'), info)
  }
    // Process form data
    // send form data to backend firebase

    const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEventName(e.target.value);

    };

    const handleOnlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsOnline(e.target.checked);
  

    };

    const handleInPersonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsInPerson(e.target.checked);

    };
  



  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  return (
    <Form className="createEventForm" onSubmit={handleSubmit}>
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
        <div className="checkboxes">
          <div>
            <input
              type="checkbox"
              id="online"
              checked={isOnline}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setIsOnline(e.target.checked)
              }
            />
            <label htmlFor="online">Online</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="in-person"
              checked={isInPerson}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setIsInPerson(e.target.checked)
              }
            />
            <label htmlFor="in-person">In-person</label>
          </div>
          {isInPerson && (
            <div>
              <label htmlFor="zipCode">address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
          )}
        </div>
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
