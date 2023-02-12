import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvtar
        //TODO Add onclick
        />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon/>
        <input placeholder='Search' />
      </HeaderSearch>
      
      <HeaderRight>
      <HelpOutlineIcon/>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer= styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-items: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  margin-left: 20px;
  >.MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    color: white;

  }
`;


const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;
  >input{
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
  
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  >.MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
    color: white;

  }
`;

const HeaderAvtar = styled(Avatar)`
  cursor: pointer;

  :hover{
    opacity: 0.8;
  }
`;
