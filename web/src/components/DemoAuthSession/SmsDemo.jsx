import React from "react";
import PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";
import {HiddenField, InputField} from "../Shared/Forms/index";

const validate = (values) => {
  const errors = {};

  if (!values.identity) {
    errors.identity = 'Required'
  }

  return errors;
};

export const SmsDemo = (props) => {
  const {handleSubmit, pristine, submitting} = props;

  return (
    <div className='demo-auth-session__form'>

      <form onSubmit={handleSubmit(props.actions.postDemoAuthSession)}>
        <Field name="identity" type="tel" component={InputField} placeholder='555-123-4567' label="SMS"/>
        <Field name="identity_type" component={HiddenField} />

        <button className='btn btn-primary' type='submit' disabled={pristine || submitting}>
          Send Email
        </button>
      </form>

    </div>
  );
};

SmsDemo.propTypes = {
  actions: PropTypes.shape({
    postDemoAuthSession: PropTypes.func.isRequired
  }).isRequired,
};

export default reduxForm({
  form: 'smsDemo',
  validate,
  initialValues: {identity_type: 'phone'}
})(SmsDemo)