import * as S from "./styles";

export default function Header() {
  return (
    <S.Section>
      <S.HeroContent>
        <S.Title>VOUGH</S.Title>
        <S.Subtitle>
        Potencial leads list.
        </S.Subtitle>
      </S.HeroContent>
      <S.SearchBar type="text" placeholder="&#xF002; Search">
      </S.SearchBar>
      <S.SearchFilter type="text" placeholder="&#xf0b0; Filter"></S.SearchFilter>
    </S.Section>
  );
}
