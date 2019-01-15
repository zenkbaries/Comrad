import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REGEX_ANY_CHARS } from '../../utils/validation';
import { resetPassword } from '../../actions';

import Alert from '../../components/Alert';
import Button from '../../components/Button';
import Form from '../../components/Form';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';

class ResetPasswordForm extends Component {
  render() {
    const { resetPassword } = this.props;

    return (
      <Form action={resetPassword} styleName="mb-5">
        <Alert />
        <p>Enter new Password Information</p>
        <FormGroup>
          <Input
            name="password"
            type="password"
            feedback="Please Enter Password"
            label="New Password"
            validate={REGEX_ANY_CHARS}
          />
        </FormGroup>
        <FormGroup>
          <Input
            name="confirm_password"
            type="password"
            label="Confirm New Password"
            validate={REGEX_ANY_CHARS}
            feedback="Please Enter Password"
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Reset Password
        </Button>
      </Form>
    );
  }
}

export default connect(
  null,
  { resetPassword },
)(ResetPasswordForm);