import { useEffect, useState } from "react";

import { Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import FilterInput from "../FilterInput";
import SearchInput from "../SearchInput";
import EmptyList from "../EmptyList";
import api from "../../services/api";

import * as S from "./styles";

export default function List() {
  const [leads, setLeads]: any = useState([]);
  const [filteredLeads, setFilteredLeads] = useState(leads);

  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState<string[]>([]);

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

  const getSearchValue = (value: string) => {
    value = value.toLowerCase();
    setSearchValue(value);
  };

  const getFilterValue = (value: string[]) => {
    setFilterValue(value);
  };

  useEffect(() => {
    doFilter();
  }, [searchValue, filterValue]);

  const doFilter = () => {
    if (searchValue !== "" && filterValue.length > 0) {
      const result = leads.filter((lead: any) => {
        for (let i = 0; i < filterValue.length; i++) {
          if (
            lead.name.toLowerCase().includes(searchValue) &&
            lead.company.bs.includes(filterValue[i])
          ) {
            return true;
          }
        }
        return false;
      });

      setFilteredLeads(result);
    } else if (searchValue !== "") {
      const result = leads.filter((lead: any) =>
        lead.name.toLowerCase().includes(searchValue)
      );

      setFilteredLeads(result);
    } else if (filterValue.length > 0) {
      const result = leads.filter((lead: any) => {
        for (let i = 0; i < filterValue.length; i++) {
          if (lead.company.bs.includes(filterValue[i])) {
            return true;
          }
        }
        return false;
      });

      setFilteredLeads(result);
    } else {
      setFilteredLeads(leads);
    }
  };

  return (
    <S.Section>
      <S.FiltersContainer>
        <SearchInput getSearchValue={getSearchValue} />
        <FilterInput getFilterValue={getFilterValue} data={leads} />
      </S.FiltersContainer>
      <S.LeadsListContent>
        <S.LeadsListTitle>
          <S.Title>Leads</S.Title>
          <S.Counter>{filteredLeads.length}</S.Counter>
        </S.LeadsListTitle>
        {/* If doesn't exist any items at list shows EmptyList' */}
        {filteredLeads.length > 0 ? (
          <S.TableList>
            <S.TheadList>
              <Tr>
                <S.ThList>Name</S.ThList>
                <S.ThList>Company</S.ThList>
                <S.ThList>Category</S.ThList>
                <S.ThList>Email</S.ThList>
                <S.ThList>Phone Number</S.ThList>
              </Tr>
            </S.TheadList>
            <S.TbodyList>
              {filteredLeads &&
                filteredLeads.map((lead: any) => (
                  <S.TrList>
                    <S.TdList>{lead.name}</S.TdList>
                    <S.TdList>{lead.company.name}</S.TdList>
                    <S.TdList>
                      {lead.company.bs.split(" ").map((category: string) => (
                        <S.Category>{category}</S.Category>
                      ))}
                    </S.TdList>
                    <S.TdList>{lead.email}</S.TdList>
                    {/* The phone value at API contains an unknown string so only the first one is taken using Split */}
                    <S.TdList>{lead.phone.split(" ")[0]}</S.TdList>
                  </S.TrList>
                ))}
            </S.TbodyList>
          </S.TableList>
        ) : (
          <EmptyList />
        )}
      </S.LeadsListContent>
    </S.Section>
  );
}
