import styled from 'styled-components';
import Header from '../shared/Header/header.component';
import {GlobalStyle} from '../styles/GlobalStyle';

const HeaderStyle = styled.header`
  height: 55px;
  width: 100%;
  position: fixed;
  box-shadow: 0px 0px 3px rgba(0,0,0,0.5);
`

const Content = styled.div`
  margin-top: 75px;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderStyle>
        <Header />
      </HeaderStyle>
    </>
  );
}

export default App;
