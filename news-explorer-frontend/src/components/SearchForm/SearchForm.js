import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchform__container">
      <form className="searchform__form" name="searchform">
        <input
          className="searchform__input"
          type="text"
          id="search"
          name="search"
          placeholder="Enter topic"
          required
        ></input>
        <button type="submit" className="searchform__submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
