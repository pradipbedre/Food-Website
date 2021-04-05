import React from "react";

const Header = (props) => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1 ">
        <span className="material-icons"></span> Food Recipe
      </h1>
      <h5 ><u>Search all details of any kind of Recipe</u></h5>
      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="search recipe...."
          value={props.search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" onClick={onSearchClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
