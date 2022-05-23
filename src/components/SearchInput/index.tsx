import { KeyboardEvent } from "react";
import * as S from "./styles";

export default function SearchInput(props: any) {
  const getInputValue = (e: KeyboardEvent): void => {
    props.getSearchValue((e.target as HTMLInputElement).value);
  };

  return (
    <S.SearchBar
      type="text"
      placeholder="&#xF002; Search by name"
      onKeyUp={getInputValue}
    />
  );
}
