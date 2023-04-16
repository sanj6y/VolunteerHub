// src/components/CreateAccount.js

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
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
      <h2 className="text-center my-4">Login</h2>
      <Form onSubmit={handleSubmit}>
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
      <Link to="/Create-Account">Don't have an account? Create one here!</Link>
      <Link to="/Create-Volunteering-Event">Create Volunteering Event</Link>
    </Container>
  );
};

export default Login;
