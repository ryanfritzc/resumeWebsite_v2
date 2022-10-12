import styled from 'styled-components';
//TODO media queries (@media) for different widths
export const NavMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #AF0C15;
    margin: 10px auto;
    width: 80%;
    height: 75px;
    border-radius: 10px;
`;

export const NavNameWrapper = styled.div`
    flex: 1;
    align-items: center;
    text-align: center;
`;

export const NavName = styled.h1`
    font-size: 36px;
    font-weight: bold;
    color: black;
`;

export const NavInfoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;
  /* margin: auto; */
`;

export const NavInfo = styled.div`
    display: flex;
    font-size: 17px;
    color: black;
    height: 75%;
    align-items: center;
    border-radius: 10px;
    padding: 5px;

    &:hover {
        background-color: blue;
        
    }
    &:last-child{
        margin-right: 20px;
    }
`;