import * as S from "./styles";

export default function EmptyList() {
  return (
    <S.EmptyListContainer>
      <S.EmptyListDivisor />
      <S.EmptyListMessage>
        No items found.
      </S.EmptyListMessage>
      <S.EmptyListImage src="/lighthouse.svg" alt="Lighthouse illustration" />
    </S.EmptyListContainer>
  );
}

