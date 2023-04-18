import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = ({ items }) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    (async () => {
      axios.get("fetchurl").then((response) => {});
    })();
  }, [term]);

  return (
    <>
      <div className="ui form">
        <div className="field">
          <label>Enter Search term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
export default Search;
