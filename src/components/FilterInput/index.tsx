import * as S from "./styles";
import { ChangeEvent, useState } from "react";

export default function FilterInput(props: any) {
  const [optionsState, setOptionsState]: any = useState(false);
  const formValue: any = [];

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
    console.dir(e.target as HTMLInputElement);
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
            <S.Option>
              <input
                onChange={handleChange}
                type="checkbox"
                name="First"
                id="First"
                value="First"
              />
              <S.OptionLabel htmlFor="First">Enter (2)</S.OptionLabel>
            </S.Option>
            <S.Option>
              <input
                onChange={handleChange}
                type="checkbox"
                name="Second"
                id="Second"
                value='Second'
              />
              <S.OptionLabel htmlFor="Second">Enter (2)</S.OptionLabel>
            </S.Option>
            <S.Option>
              <input
                onChange={handleChange}
                type="checkbox"
                name="Third"
                id="Third"
                value='Third'
              />
              <S.OptionLabel htmlFor="Third">Enter (2)</S.OptionLabel>
            </S.Option>
          </S.OptionsBox>
        </>
      )}
    </S.SearchContainer>
  );
}
