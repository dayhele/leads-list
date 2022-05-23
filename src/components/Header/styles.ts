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