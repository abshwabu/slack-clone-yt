import React from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ChatInput from './ChatInput'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../features/appSlice'
function Chat() {
    const roomId = useSelector(selectRoomId)
  return (
    <ChatContainer>
        <Header>
        <HeaderLeft>
            <h4><strong>#Room-name</strong></h4>
            <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
            
            <p><InfoOutlinedIcon/> Details</p>
        </HeaderRight>
        </Header>
        <ChatMessage></ChatMessage>
        <ChatInput
            channelId = {roomId}
        />
    </ChatContainer>
  )
}

export default Chat
const Header = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`
const HeaderRight = styled.div`
>p{
    display: flex;
    font-size: 14px;
    align-items: center;
    
}
>p>.MuiSvgIcon-root{
    margin-right: 5px !important;
    font-size: 16px;
}
`
const HeaderLeft = styled.div`
display: flex;
align-items: center;
>h4{
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
}
>h4>.MuiSvgIcon-root{
    margin-left: 10px;
    font-size: 17px;
}
`
const ChatContainer = styled.div`
flex: 0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 60px;
`
const ChatMessage = styled.div``