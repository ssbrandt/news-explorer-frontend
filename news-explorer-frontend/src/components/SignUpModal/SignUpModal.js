import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SignUpModal = ({ isOpen, onCloseModal, onRedirect }) => {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = React.useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [username, setUsername] = React.useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    // onSignUp();
  }

  return (
    <PopupWithForm
      title="Sign Up"
      name="signup"
      buttonText="Sign Up"
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
          placeholder="Enter your email"
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
          placeholder="Enter your password"
          required
          value={password}
          onChange={handlePasswordChange}
        ></input>

        <label className="form__label" htmlFor="username">
          Email
        </label>
        <input
          className="form__input-text"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          required
          value={username}
          onChange={handleUsernameChange}
        ></input>
      </fieldset>
      <button type="button" className="form__redirect" onClick={onRedirect}>
        or <span className="form__redirect-text">Sign In</span>
      </button>
    </PopupWithForm>
  );
};

export default SignUpModal;
