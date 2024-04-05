import React from "react";
import { Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
//component imports
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchResults from "../SearchResults/SearchResults";
import SignInModal from "../SignInModal/SignInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedCards from "../SavedCards/SavedCards";
import Preloader from "../Preloader/Preloader";
import { cards } from "../../utils/cards";

function App() {
  const [activeModal, setActiveModal] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const handleSignInModal = () => {
    setActiveModal("signin");
  };

  const handleSignUpModal = () => {
    setActiveModal("signup");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  React.useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  React.useEffect(() => {
    if (!activeModal) return;

    const handleCloseOnClick = (evt) => {
      if (
        evt.target.classList.contains("modal") &&
        !evt.target.closest(".modal__container")
      ) {
        handleCloseModal();
      }
    };

    window.addEventListener("click", handleCloseOnClick);

    return () => {
      window.removeEventListener("click", handleCloseOnClick);
    };
  }, [activeModal]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div className="background__image">
            <Header
              onSignInModal={handleSignInModal}
              loggedIn={true}
              darkMode={true}
            />
            <Main />
          </div>
          <Preloader />
          <SearchResults loggedIn={true} cards={cards} />

          <About />
          <Footer />
        </Route>

        <Route exact path="/saved-news">
          <Header loggedIn={loggedIn} darkMode={darkMode} />
          <SavedNewsHeader />
          <SavedCards loggedIn={loggedIn} cards={cards} />
          <Footer />
        </Route>
      </Switch>

      {activeModal === "signin" && (
        <SignInModal
          onCloseModal={handleCloseModal}
          isOpen={activeModal === "signin"}
          onRedirect={handleSignUpModal}
        />
      )}

      {activeModal === "signup" && (
        <SignUpModal
          onCloseModal={handleCloseModal}
          isOpen={activeModal === "signup"}
          onRedirect={handleSignInModal}
        />
      )}
    </div>
  );
}

export default App;
