import styled from "styled-components";

export const SearchContainer = styled.form`
  position: relative;
`;

export const SearchFilter = styled.p`
  display: flex;
  align-items: center;
  font-weight: 200;
  font-size: 0.88rem;
  width: 12rem;
  height: 2.65rem;
  padding: 0 0.98em;
  color: ${(props) => props.theme.palette.gray};
  border: 1px solid ${(props) => props.theme.palette.gray};
  border-radius: 8px;
  font-family: FontAwesome, ${(props) => props.theme.fonts.primary};
  cursor: pointer;

  @media (max-width: 842px) {
     width: 16rem;
  }
`;

export const OptionsBox = styled.fieldset`
  z-index: 10;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 12rem;
  height: auto;
  padding: 1.125rem;
  border: 1px solid ${(props) => props.theme.palette.gray};
  border-radius: 0.75rem;
  box-shadow: 0px 4px 4px ${(props) => props.theme.palette.shadow};
  background-color: ${(props) => props.theme.palette.white};

  @media (max-width: 842px) {
     width: 16rem;
  }
`;

export const OptionsTitle = styled.legend`
  font-weight: 600;
  color: ${(props) => props.theme.palette.black};
  font-size: 0.875rem;
  line-height: 1.125rem;
`;

export const OptionsCategory = styled.h4`
  font-weight: 500;
  color: ${(props) => props.theme.palette.black};
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  & + & {
    margin-top: 0.313rem;
  }
`;

interface Props {
  htmlFor: string;
}

export const OptionLabel = styled.label<Props>`
  font-weight: 400;
  color: ${(props) => props.theme.palette.black};
  font-size: 12px;
  margin-left: 6px;
  text-transform: capitalize;
`;

export const OptionAction = styled.button`
  position: absolute;
  color: ${(props) => props.theme.palette.primary};
  font-size: 12px;
  font-weight: 500;
  text-decoration: underline;
  border: none;
  background: unset;
  right: 1.125rem;
  cursor: pointer;
`;

export const OptionBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
`;
