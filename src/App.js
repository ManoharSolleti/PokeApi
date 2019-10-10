import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 10px);
`;

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageUrl, setnextPageUrl] = useState();
  const [prevPageUrl, setprevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => (cancel = c))
      })
      .then(res => {
        setLoading(false);
        setnextPageUrl(res.data.next);
        setprevPageUrl(res.data.previous);
        setPokemon(res.data.results.map(p => p.name));
      });

    return () => {
      cancel();
    };
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading)
    return (
      <StyledDiv>
        <Loader
          type="Triangle"
          color="#ff0000"
          height={100}
          width={100}
          timeout={3000}
        />
      </StyledDiv>
    );

  return (
    <>
      <PokemonList className="PokemonList" pokemon={pokemon} />
      <Pagination
        className="Pagination"
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

export default App;
