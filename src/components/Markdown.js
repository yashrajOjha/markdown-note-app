import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import useLocalStorage from '../hooks/useLocalStorage';

function Markdown() {
  const [data,setData] = useLocalStorage("note",[{}]);
  return <>
  <Container>
      <TextArea>
          <MDEditor
        value={data['text']}
        onChange={setData}
        height={600}
        visiableDragbar= {false}
        preview={'live'}
        enableScroll={true}
      />
      </TextArea>
      <SaveButton
      onClick={()=>{
        localStorage.setItem("note", JSON.stringify(data));
      }}>
        Save
      </SaveButton>
  </Container>
  </>;
}

export default Markdown;

const Container = styled.div`
height:calc(100vh-80px);
margin-top:.5%;
display:flex;
flex-direction:row;
background:#F5F5F5;
`
const TextArea = styled.div`
margin:2%;
width: 97%;
height: 80%;
display:flex;
flex-direction:column;
textarea{
  height:100vh;
}
`
const SaveButton = styled.button`
  position:absolute;
  top:0;
  right:0;
  margin:1.2%;
  padding: 7px 20px;
  font-size:16px;
  font-weight:600;
  color:#1A374D;
  border-style:none;
  border-radius:10px;
  cursor:pointer;

  &:hover{
    background:#B1D0E0;
    color:#1A374D;
  }
`