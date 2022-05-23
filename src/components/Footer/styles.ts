import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  min-height: 3rem;
  background-color: ${(props) => props.theme.palette.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.p `
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.white};
  font-size: 0.88rem;
  font-weight: 500;
`;

export const AuthorGithub = styled.a `
  color: ${(props) => props.theme.palette.white};
  font-weight: 600;
  margin: 0 0.32rem;
`;