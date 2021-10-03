import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { creatStream } from '../../actions';

class StreamCreate extends Component {
  renderError = ({ touched, error }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, lable, meta }) => {
    const className = `field ${meta.touched && meta.error} ? 'error' : ''`;
    return (
      <div className={className}>
        <lable>{lable}</lable>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.creatStream(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          lable="Enter a title"
        />
        <Field
          name="description"
          component={this.renderInput}
          lable="Enter a description"
        />
        <button className="ui button primary"> Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You should enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You should enter a description';
  }
  return errors;
};

const formWraped = reduxForm({
  form: 'streamCeate',
  validate: validate,
})(StreamCreate);

export default connect(null, { creatStream })(formWraped);
