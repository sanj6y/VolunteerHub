// src/components/CreateAccount.js

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CreateAccount.module.css";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <Container className={styles.container}>
      <h2 className="text-center my-4">Create Your Account</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label className={styles.title}>Name</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className={styles.title}>Email</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label className={styles.title}>Phone #</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="zipCode">
          <Form.Label className={styles.title}>Zip Code</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label className={styles.title}>Password</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button className={styles.submitButton} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateAccount;
