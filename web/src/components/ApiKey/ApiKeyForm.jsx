import React from "react";
import PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";
import {fieldRegex} from "../../constants";
import {InputField} from "../Shared/Forms/index";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required'
  } else if (!fieldRegex.email.test(values.email)) {
    errors.email = 'Invalid email';
  } else if (values.email.includes('+')) {
    errors.email = 'Email cannot have "+" character';
  }

  return errors;
};

const NewApiKeyForm = (props) => {
  const {handleSubmit, pristine, submitting} = props;

  return (
    <div className='new-api-key'>
      <form onSubmit={handleSubmit(props.actions.createApiKey)}>
        <Field name="email" type="email" component={InputField} label="Email" placeholder='Enter your Email: ex. myEmail@example.com'/>

        <button className='btn btn-primary' type='submit' disabled={pristine || submitting}>
          Create Api Key
        </button>
      </form>

    </div>
  );
};

NewApiKeyForm.propTypes = {
  actions: PropTypes.shape({
    createApiKey: PropTypes.func.isRequired
  }).isRequired,
};

export default reduxForm({
  form: 'newApiKeyForm',
  validate
})(NewApiKeyForm)