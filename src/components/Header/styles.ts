import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 2.5rem;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 2.75rem 5.75rem 0;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
  color: ${(props) => props.theme.palette.primary};
  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.theme.palette.black};
`;

export const Filter = styled.div `
  display: flex;
  flex-direction: row;
`;

export const SearchBar = styled.input`
  width: 27rem;
  height: 2.65rem;
  padding: 0.98em;
  margin: 1.5rem 0 0 5.75rem;
  color: ${(props) => props.theme.palette.gray};
  border: 1px solid ${(props) => props.theme.palette.gray};
  border-radius: 8px;
  font-family: FontAwesome, ${(props) => props.theme.fonts.primary};
`;

export const SearchFilter = styled.input`
  width: 12rem;
  height: 2.65rem;
  padding: 0.98em;
  margin: 1.5rem;
  color: ${(props) => props.theme.palette.gray};
  border: 1px solid ${(props) => props.theme.palette.gray};
  border-radius: 8px;
  font-family: FontAwesome, ${(props) => props.theme.fonts.primary};
`;
