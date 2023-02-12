import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 
import {enterRoom} from '../features/appSlice'
function SidebarOption({Icon,title,addChannelOption,id}) {
    const disptch = useDispatch()
    const addChannel = async ()=>{
        const ChannalName = prompt('Enter channel name');
        
        if(ChannalName){
            await addDoc(collection( db,"rooms"), {
                name: ChannalName,
                
              });
        }
    }
    const selectChannel = ()=>{
        if(id){
            disptch(enterRoom({
                roomId: id,
            }))
        }
    }
  return (
    <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
    > 
        {Icon && <Icon fontSize="small" style={{padding:10}}/>}
        {Icon ? (
            <h3>{title}</h3>
        ):(
            <SidebarOptionChannel>
                <span>#</span>{title}
            </SidebarOptionChannel>
        )}
    </SidebarOptionContainer>
  )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }
    >h3{
        font-weight: 500;
    }
    >h3>span{
        padding: 15px; 
    }
`
const SidebarOptionChannel = styled.h3`
 padding: 10px 0;
 font-weight: 300;
`