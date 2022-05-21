import * as S from "./styles";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

export default function List() {
  return (
    <S.Section>
      <S.LeadsListContent>
        <S.LeadsListTitle>
          <S.Title>Leads</S.Title>
          <S.Counter>3</S.Counter>
        </S.LeadsListTitle>
        <S.TableCustom>
          <S.TheadCustom>
            <Tr>
              <Th>Name</Th>
              <Th>Company</Th>
              <Th>Category</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
            </Tr>
          </S.TheadCustom>
          <S.TbodyCustom>
            <S.TrCustom>
              <S.TdCustom>Tablescon</S.TdCustom>
              <S.TdCustom>9 April 2019</S.TdCustom>
              <S.TdCustom>East Annex</S.TdCustom>
              <S.TdCustom>East Annex</S.TdCustom>
              <S.TdCustom>East Annex</S.TdCustom>
            </S.TrCustom>
            <S.TrCustom>
              <S.TdCustom>Capstone Data</S.TdCustom>
              <S.TdCustom>19 May 2019</S.TdCustom>
              <S.TdCustom>205 Gorgas</S.TdCustom>
              <S.TdCustom>19 May 2019</S.TdCustom>
              <S.TdCustom>19 May 2019</S.TdCustom>
            </S.TrCustom>
            <S.TrCustom>
              <S.TdCustom>Tuscaloosa D3</S.TdCustom>
              <S.TdCustom>29 June 2019</S.TdCustom>
              <S.TdCustom>29 June 2019</S.TdCustom>
              <S.TdCustom>29 June 2019</S.TdCustom>
              <S.TdCustom>Github</S.TdCustom>
            </S.TrCustom>
          </S.TbodyCustom>
        </S.TableCustom>
      </S.LeadsListContent>
    </S.Section>
  );
}
