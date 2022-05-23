import styled from "styled-components";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

export const Section = styled.section`
  width: 100%;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 0px 24px;

  @media (max-width: 842px) {
     flex-direction: column;
  }
`;

export const LeadsListContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 600px;
`;

export const LeadsListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 4rem 0 3.8rem 5.75rem;

  @media (max-width: 842px) {
     margin: 2.6rem 2rem;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme.palette.black};
  font-family: ${(props) => props.theme.fonts.primary};
`;

export const Counter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.38rem 0 0 0.5rem;
  background: ${(props) => props.theme.palette.primary};
  width: 1.32rem;
  height: 1.32rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.75rem;
  color: ${(props) => props.theme.palette.white};
`;

export const TableList = styled(Table)`
  border-spacing: 0;
  margin-bottom: 3rem;
`;

export const TheadList = styled(Thead)`
  color: ${(props) => props.theme.palette.lightBlue};
  font-weight: 700;
  font-size: 0.85rem;
`;

export const TdList = styled(Td)`
  text-align: center;
  padding: 0.88rem 0;
  font-size: 0.88rem;
  font-weight: 500;
  flex-wrap: wrap;

`;

export const TrList = styled(Tr)`
  text-align: center;

  @media screen and (max-width: 40em) {
    border: none !important;
  }

  td:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  th:nth-child(3) {
    max-width: 600px;
  }
`;

export const TbodyList = styled(Tbody)`
  tr:nth-child(even) {
    background-color: ${(props) => props.theme.palette.veryLightBlue};
  }
`;

export const ThList = styled(Th)`
  padding: 0.88rem 0;
`;

export const Category = styled.p`
  background-color: ${(props) => props.theme.palette.primary};
  border-radius: 0.56rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.palette.white};
  padding: 0.35rem 0.5rem;
  margin: 0.24rem;
  text-transform: capitalize;
`;