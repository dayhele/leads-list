import * as S from "./styles";
import { ChangeEvent, useState } from "react";

export default function FilterInput(props: any) {
  const [optionsState, setOptionsState]: any = useState(false);
  const formValue: any = [];
  const categoryArray: string[] = [];

  props.data.forEach((lead: any) => {
    const leadCategories = lead.company.bs.split(" ");

    leadCategories.forEach((category: string) => {
      if (!categoryArray.includes(category)) {
        categoryArray.push(category);
      }
    });
  });

  const toggleOptionsBox = (e: React.MouseEvent<HTMLInputElement>) => {
    setOptionsState(!optionsState);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (target.checked) {
      formValue.push(target.value);
    } else {
      const elementIndex = formValue.indexOf(target.value);
      formValue.splice(elementIndex, 1);
    }
  };

  const saveOptions = (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.getFilterValue(formValue);
  };

  return (
    <S.SearchContainer onSubmit={saveOptions}>
      <S.SearchFilter onClick={toggleOptionsBox}>
        &#xf0b0; Filter
      </S.SearchFilter>
      {optionsState && (
        <>
          <S.OptionBackdrop onClick={toggleOptionsBox} />
          <S.OptionsBox>
            <S.OptionAction type="submit">Save View</S.OptionAction>
            <S.OptionsTitle>Filters</S.OptionsTitle>
            <S.OptionsCategory>Category</S.OptionsCategory>
            {categoryArray.map((category) => (
              <S.Option>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name={category}
                  id={category}
                  value={category}
                />
                <S.OptionLabel htmlFor={category}>{category}</S.OptionLabel>
              </S.Option>
            ))}
          </S.OptionsBox>
        </>
      )}
    </S.SearchContainer>
  );
}
