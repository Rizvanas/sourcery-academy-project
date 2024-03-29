import React from "react";
import { Field } from "redux-form";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import { compose } from "redux";
import loginStyles from "../../utils/loginStyles";

class FormField extends React.Component {
  renderInput = ({
    input,
    meta,
    name,
    title,
    type,
    placeholder,
    authMessage,
    emailError,
    passwordError,
    displayErr,
    inputFieldStyle
  }) => {
    return (
      <FormControl
        className="form__field"
        error={
          (meta.error && meta.touched) ||
          authMessage !== null ||
          emailError !== null ||
          passwordError !== null
        }
      >
        {authMessage && displayErr ? (
          <FormHelperText>{authMessage}</FormHelperText>
        ) : null}

        {emailError && type === "email" ? (
          <FormHelperText>{emailError}</FormHelperText>
        ) : null}

        {passwordError && type === "password" ? (
          <FormHelperText>{passwordError}</FormHelperText>
        ) : null}

        <label htmlFor={name} className="form__label">
          {title}
        </label>
        <input
          className="form__input"
          style={inputFieldStyle}
          {...input}
          type={type}
          placeholder={placeholder}
        />
        {meta.touched && meta.error ? (
          <FormHelperText>{meta.error}</FormHelperText>
        ) : null}
      </FormControl>
    );
  };

  render() {
    const {
      placeholder,
      name,
      title,
      type,
      authMessage,
      emailError,
      passwordError,
      displayErr,
      inputFieldStyle
    } = this.props;
    return (
      <Field
        component={this.renderInput}
        placeholder={placeholder}
        name={name}
        type={type}
        title={title}
        authMessage={authMessage}
        emailError={emailError}
        passwordError={passwordError}
        inputFieldStyle={inputFieldStyle}
        displayErr={displayErr}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    authMessage: state.auth.message,
    emailError: state.signup.emailError,
    passwordError: state.signup.passwordError
  };
};

export default compose(
  connect(mapStateToProps),
  withStyles(loginStyles)
)(FormField);
