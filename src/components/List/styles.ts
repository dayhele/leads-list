import styled from "styled-components";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0px 24px;
`;

export const LeadsListContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LeadsListTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 0 0 3.8rem 5.75rem;
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

export const TableCustom = styled(Table)`
  border-spacing: 0;
`;

export const TheadCustom = styled(Thead)`
  color: ${(props) => props.theme.palette.lightBlue};
  font-weight: 700;
  font-size: 0.85rem;
`;

export const TdCustom = styled(Td)`
  text-align: center;
  padding: 0.88rem 0;
  font-size: 0.88rem;
  font-weight: 500;
  flex-wrap: wrap;
`;

export const TrCustom = styled(Tr)`
  text-align: center;

  td:nth-child(3) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  th:nth-child(3) {
    max-width: 600px;
  }
`;

export const TbodyCustom = styled(Tbody)`
  tr:nth-child(even) {
    background-color: ${(props) => props.theme.palette.veryLightBlue};
  }
`;

export const ThCustom = styled(Th)`
  padding: 0.88rem 0;
`;

export const Category = styled.p`
  background-color: ${(props) => props.theme.palette.primary};
  border-radius: 0.56rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.palette.white};
  padding: 0.35rem 0.5rem;
  margin: 0.24rem;
`;