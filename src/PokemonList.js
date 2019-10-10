import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #00000050;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledLi = styled.li`
  background-color: #ff000080;
  height: 12vh;
  width: 20vh;
  border: 1px solid blue;
  text-align: center;
  margin: 5px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function PokemonList({ pokemon }) {
  return (
    <StyledDiv>
      <StyledUl>
        {pokemon.map(p => (
          <StyledLi key={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</StyledLi>
        ))}
      </StyledUl>
    </StyledDiv>
  );
}
