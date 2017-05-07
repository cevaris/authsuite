import React from "react";

export const InputField = ({input, label, placeholder, type, meta: {touched, error}}) => {
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
      <input {...input} className="form-control" type={type} placeholder={placeholder}/>
      {touched && iconState}
      {touched && (error && <span>{error}</span>)}
    </div>
  );
};