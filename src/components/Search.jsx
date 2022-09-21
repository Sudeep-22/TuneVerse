import React from "react";
import "./styles/Search.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };

  return (
    <div className="Search">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
      </form>
    </div>
  );
}

export default Search;
