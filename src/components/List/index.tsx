import { useEffect, useState } from "react";

import { Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import FilterInput from "../FilterInput";
import SearchInput from "../SearchInput";
import api from "../../services/api";

import * as S from "./styles";

export default function List() {
  const [leads, setLeads]: any = useState([]);
  const [filteredLeads, setFilteredLeads]: any = useState(leads);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setLeads(response.data);
        setFilteredLeads(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const getInputValue = (value: string) => {
    value = value.toLowerCase();

    if (value !== "") {
      const result = leads.filter((lead: any) =>
        lead.name.toLowerCase().includes(value)
      );
      setFilteredLeads(result);
    } else {
      setFilteredLeads(leads);
    }
  };

  return (
    <S.Section>
      <S.FiltersContainer>
        <SearchInput getValue={getInputValue} />
        <FilterInput />
      </S.FiltersContainer>
      <S.LeadsListContent>
        <S.LeadsListTitle>
          <S.Title>Leads</S.Title>
          <S.Counter>{filteredLeads.length}</S.Counter>
        </S.LeadsListTitle>
        <S.TableCustom>
          <S.TheadCustom>
            <Tr>
              <S.ThCustom>Name</S.ThCustom>
              <S.ThCustom>Company</S.ThCustom>
              <S.ThCustom>Category</S.ThCustom>
              <S.ThCustom>Email</S.ThCustom>
              <S.ThCustom>Phone Number</S.ThCustom>
            </Tr>
          </S.TheadCustom>
          <S.TbodyCustom>
            {filteredLeads &&
              filteredLeads.map((lead: any) => (
                <S.TrCustom>
                  <S.TdCustom>{lead.name}</S.TdCustom>
                  <S.TdCustom>{lead.company.name}</S.TdCustom>
                  <S.TdCustom>
                    {lead.company.bs.split(" ").map((category: string) => (
                      <S.Category>{category}</S.Category>
                    ))}
                  </S.TdCustom>
                  <S.TdCustom>{lead.email}</S.TdCustom>
                  <S.TdCustom>{lead.phone.split(" ")[0]}</S.TdCustom>
                </S.TrCustom>
              ))}
          </S.TbodyCustom>
        </S.TableCustom>
      </S.LeadsListContent>
    </S.Section>
  );
}
