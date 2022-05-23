import styled from "styled-components";

export const SearchBar = styled.input`
  width: 27rem;
  height: 2.65rem;
  padding: 0.98em;
  margin-left: 5.75rem;
  color: ${(props) => props.theme.palette.gray};
  border: 1px solid ${(props) => props.theme.palette.gray};
  border-radius: 8px;
  font-family: FontAwesome, ${(props) => props.theme.fonts.primary};
`;