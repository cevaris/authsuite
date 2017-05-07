import React from "react";
import PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";
import {fieldRegex} from "../../constants";
import {HiddenField, InputField} from "../Shared/Forms/index";

const validate = (values) => {
  const errors = {};

  if (!values.identity) {
    errors.identity = 'Required'
  } else if (!fieldRegex.email.test(values.identity)) {
    errors.identity = 'Invalid email';
  } else if (values.identity.includes('+')) {
    errors.identity = 'Email cannot have "+" character';
  }

  return errors;
};

export const EmailDemo = (props) => {
  const {handleSubmit, pristine, submitting} = props;

  return (
    <div className='demo-auth-session__form'>

      <form onSubmit={handleSubmit(props.actions.postDemoAuthSession)}>
        <Field name="identity" type="email" component={InputField} label="Email" placeholder='Enter your Email: ex. myEmail@example.com'/>
        <Field name="identity_type" component={HiddenField} />

        <button className='btn btn-primary' type='submit' disabled={pristine || submitting}>
          Send Email
        </button>
      </form>

    </div>
  );
};

EmailDemo.propTypes = {
  actions: PropTypes.shape({
    postDemoAuthSession: PropTypes.func.isRequired
  }).isRequired,
};

export default reduxForm({
  form: 'emailDemo',
  validate,
  initialValues: {identity_type: 'email'}
})(EmailDemo)