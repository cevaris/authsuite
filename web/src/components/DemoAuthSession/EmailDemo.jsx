import React from "react";
import PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";
import {fieldRegex} from "../../constants";

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

const InputField = ({input, label, type, meta: {touched, error}}) => {
  let iconState = false;
  if (touched && error) {
    iconState = (<span className="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"/>);
  }
  if (touched && !error) {
    iconState = (<span className="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"/>);
  }

  let hasState = '';
  if (touched && !error) {
    hasState = 'has-success';
  }
  if (touched && error) {
    hasState = 'has-error';
  }

  return (
    <div className={'form-group has-feedback ' + hasState}>
      <label className="control-label">{label}</label>
      <input {...input} className="form-control" placeholder={label} type={type}/>
      {touched && iconState}
      {touched && (error && <span>{error}</span>)}
    </div>
  );
};

const HiddenField = ({input}) =>
  <input {...input} type='hidden'/>;


export const EmailDemo = (props) => {
  const {handleSubmit, pristine, submitting} = props;

  return (
    <div className='demo-auth-session__form'>

      <form onSubmit={handleSubmit(props.actions.postDemoAuthSession)}>
        <Field name="identity" type="email" component={InputField} label="Email"/>
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