import React, { useState } from "react";

const SearchUserApp = ({ inputValue, setInputValue }) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-12 col-md-6 offset-md-3">
          <form>
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Buscar usuario..."
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchUserApp;
