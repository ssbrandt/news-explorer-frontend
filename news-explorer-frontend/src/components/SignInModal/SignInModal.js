import "./SignInModal.css";
import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SignInModal = ({ isOpen, onCloseModal, onRedirect }) => {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = React.useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    // onSignUp();
  }

  return (
    <PopupWithForm
      title="Sign In"
      name="signin"
      buttonText="Sign In"
      onCloseModal={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input-text"
          type="text"
          id="email"
          name="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={handleEmailChange}
        ></input>

        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input-text"
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        ></input>
      </fieldset>
      <button type="button" className="form__redirect" onClick={onRedirect}>
        or Sign Up
      </button>
    </PopupWithForm>
  );
};

export default SignInModal;
