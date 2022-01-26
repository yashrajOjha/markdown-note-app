import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import useLocalStorage from '../hooks/useLocalStorage';
function Markdown() {
  const [temp,setTemp] = useLocalStorage();
  function savechanges(){
    localStorage.setItem("notes",JSON.stringify(temp));
  }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    // const content = <MDEditor.Markdown source={temp} />
    const file = new Blob([temp], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "notes.md";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  const handleFileChange= (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () =>{
      setTemp(reader.result);
    }
  }   
  return <>
  <Container>
      <TextArea>
          <MDEditor
        value={temp}
        onChange={setTemp}
        height={600}
        visiableDragbar= {false}
        preview={'live'}
        enableScroll={true}
      />
      </TextArea>
      <ButtonGroup>
      <NewNote onClick={()=>{
        localStorage.removeItem("notes")
        setTemp("## Welcome ! Start your new note here👇")
        window.location.reload()
      }}>
        new note
      </NewNote>
      <SaveButton onClick={savechanges}>
        save
      </SaveButton>
      <DownloadFile onClick={downloadTxtFile}>
        download
      </DownloadFile>
      <UploadFile>
      <input type="file" id="imgupload" onChange={handleFileChange}/>
      <label htmlFor='imgupload'>upload</label>
      </UploadFile>
      </ButtonGroup>
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
const ButtonGroup = styled.div`
  width:30%;
  display:flex;
  flex-direction:row;
  position:absolute;
  justify-content:space-between;
  top:0;
  right:0;
  margin:1%;
  background:#1A374D;
`

const SaveButton = styled.button`
  margin:1.2%;
  padding: 7px 15px;
  font-size:13px;
  font-weight:600;
  color:#1A374D;
  border: 2px solid black;
  // border-radius:10px;
  cursor:pointer;

  box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);
-webkit-box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);
-moz-box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);

  &:hover{
    background:#B1D0E0;
    color:#1A374D;
    transition: 250ms ease;
  }
`
const DownloadFile = styled.button`
margin:1.2%;
padding: 7px 15px;
font-size:13px;
font-weight:600;
color:#1A374D;
border: 2px solid black;
// border-radius:10px;
cursor:pointer;

box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);
-webkit-box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);
-moz-box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);

&:hover{
  background:#B1D0E0;
  color:#1A374D;
  transition: 250ms ease;
}
`

const NewNote = styled.button`
margin:1.2%;
padding: 7px 15px;
font-size:13px;
font-weight:600;
color:#1A374D;
border: 2px solid black;
// border-radius:10px;
cursor:pointer;

box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);
-webkit-box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);
-moz-box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);

&:hover{
  background:#B1D0E0;
  color:#1A374D;
  transition: 250ms ease;
}
`
const UploadFile = styled.button`
margin:1.2%;
  padding: 7px 15px;
  font-size:13px;
  font-weight:600;
  color:#1A374D;
  border: 2px solid black;
  // border-radius:10px;
  cursor:pointer;

  box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);
-webkit-box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);
-moz-box-shadow: 7px 7px 0px -2px rgba(0,0,0,1);

  &:hover{
    background:#B1D0E0;
    color:#1A374D;
    transition: 250ms ease;
  }
  input{
    display:none;
  }
  label{
    background:inherit;
    cursor:pointer;
  }
`