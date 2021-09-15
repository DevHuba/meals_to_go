import React from "react";
import styled from "styled-components/native";

const Search = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.inverse};
`;

export const Search = () => {
  <Search>
    <SearchBar />
  </Search>;
};
