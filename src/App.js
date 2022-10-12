import { Header } from './components/Header';
import styled from 'styled-components';

const AppDiv = styled.div`
`;
const StyleDiv = styled.div`
  background-color: #0D3580;
  top: 0;
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 35%;
  display: block;
  position: absolute;
  z-index: -1;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
`;

function App() {
  return (
    <>
      <StyleDiv></StyleDiv>
      <AppDiv>
        <Header></Header>
      </AppDiv>
    </>
  );
}

export default App;
