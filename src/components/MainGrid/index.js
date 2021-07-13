import styled from 'styled-components'

export const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px;
  
  width: 100%;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  padding: 16px;

  .profileArea {
    display: none;

    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    display: grid;
    grid-template-areas: 'profileArea welcomeArea profileRelationsArea';
    grid-template-columns: 160px 1fr 312px;
    max-width: 1110px;
  }
`
