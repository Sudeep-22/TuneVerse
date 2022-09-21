import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import Searched from "./components/Searched";
import Pages from "./pages/Pages";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <A href="/">
          <H1>TuneVerse</H1>
        </A>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const H1 = styled.h1`
  font-family: "Ms Madi", cursive;
  /* margin-left: 2vw; */
  text-align: center;
  font-size: 4rem;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
`;

export default App;
