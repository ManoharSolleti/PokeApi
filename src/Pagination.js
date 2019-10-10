import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 10%;
  color: rebeccapurple;
  background-color: yellow;
  height: 40px;
  width: 150px;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 15px;
`;

export default function Pagination({gotoNextPage, gotoPrevPage}) {
  return (
    <div>
      {gotoPrevPage && <StyledButton onClick={gotoPrevPage}>Previous</StyledButton> }
      {gotoNextPage && <StyledButton onClick={gotoNextPage}>Next</StyledButton>}
    </div>
  )
}
