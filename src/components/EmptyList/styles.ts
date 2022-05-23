import styled from "styled-components";

export const EmptyListDivisor = styled.hr`
  display: flex;
  justify-content: center;
  width: calc(100% - 3rem);
  text-align: center;
  margin: 0 auto;
`;

export const EmptyListContainer = styled.div`
  width: 100%;
  height: 400px;
  text-align: center;
  margin: 0 0 5rem 0;
`;

export const EmptyListMessage = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.palette.gray};
  margin: 3.5rem 0 3rem 0;
`;

export const EmptyListImage = styled.img `
  width: 200px;
  height: 200px;
`;