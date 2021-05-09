import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import paths from '../router/paths'
import AuthManager from '../services/AuthManager';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    console.log(`Logging in as email ${email}`);
    AuthManager.login();
  };

  return (
    <Row className="mt-5">
      <Col
        lg={{ span: 6, offset: 3 }}
        md={{ span: 8, offset: 2 }}
        sm={{ span: 12 }}
      >
        <Card>
          <Card.Body>
            <Link to={paths.signUp} className="float-right">
              <Button type="button" variant="outline-primary">
                Sign up
              </Button>
            </Link>
            <Card.Title>Sign in</Card.Title>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} type="email" placeholder="Enter email" onChange={onChangeEmail} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} type="password" placeholder="Password" onChange={onChangePassword} />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Submit
            </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
