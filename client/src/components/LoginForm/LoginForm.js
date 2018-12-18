import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Feedback from '../../components/Feedback';
import Form from '../../components/Form';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Label from '../../components/Label';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = valid => {
    const { email, password } = this.state;
    const { history, loginUser } = this.props;

    if (valid) {
      loginUser({ email, password }, () => {
        history.push('/dashboard');
      });
    }
  };

  render() {
    const { errorMessage } = this.props.auth;

    return (
      <Form handleFormSubmit={this.handleFormSubmit} validate>
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <FormGroup>
          <Input
            name="email"
            onChange={this.handleInputChange}
            type="text"
            value={this.state.email}
          />
          <Label htmlFor="email">Email</Label>
          <Feedback>Must be Valid Email</Feedback>
        </FormGroup>

        <FormGroup>
          <Input
            name="password"
            onChange={this.handleInputChange}
            type="password"
            value={this.state.password}
          />
          <Label htmlFor="password">Password</Label>
          <Feedback>Must be Valid Password</Feedback>
        </FormGroup>

        <Button type="primary">Sign In</Button>
        <Button type="primary">Reset Password</Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps,
  actions,
)(LoginForm);
