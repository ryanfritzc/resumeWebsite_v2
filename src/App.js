import { Header } from './components/Header';
import { 
  AttentionGrabber,
  ProfilePic, 
 } from './styles/AppStyles';
import ScrollFade from './components/ScrollFade';
import styled from 'styled-components';
import profileImg from "./media/100TWojack.jpg";

const AppDiv = styled.div`
`;


function App() {
  return (
    
      <AppDiv>
        <Header></Header>
        <ProfilePic
            src={profileImg}
            alt="Profile Picture"
          />
        <AttentionGrabber>
          
        </AttentionGrabber>
      </AppDiv>
  );
}

export default App;
