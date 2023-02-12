import React, {  useState } from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import {  addDoc,serverTimestamp,collection, doc } from "firebase/firestore"; 
import { db } from '../firebase'


function ChatInput(chatName,channelId) {
    const [input,setInput] = useState('')
    console.log(channelId);
    const sendMessage = async e =>{
        e.preventDefault()
        if(!channelId){
            return false
        }
        
        const roomRef =  collection(db, "rooms");
        const messageRef = doc(roomRef,channelId)
         await addDoc(collection( messageRef,"messages"), {
            message: input,
            timestamp: serverTimestamp()
          })
          setInput('')
    }
  return (
    <ChatInputContainer>
        <form>
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder={`Message #ROM`} />
            <Button hidden type='submit' onClick={sendMessage}>
                send
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;
>form{
    position: relative;
    display: flex;
    justify-content: center;

}
>form>input{
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}
>form>button{
    display: none !important;
}
`