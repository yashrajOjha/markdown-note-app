import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
function Markdown() {
  const [data,setData] = useState("A simple markdown editor with preview, implemented with React.js and TypeScript. This React Component aims to provide a simple Markdown editor with syntax highlighting support.")
  return <>
  <Container>
      <LeftTextArea>
          <h3>Type Here</h3>
          <textarea value={data} onChange={(e)=>{
              setData(e.target.value)
          }}></textarea>
      </LeftTextArea>
      <RightDisplayArea>
          <h3>Rendered Output</h3>
          <ReactMarkdown children={data} components={{
              code:Component,
          }}>
          </ReactMarkdown>
      </RightDisplayArea>
  </Container>
  </>;
}

const Component = ({value}) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {value ?? 'console.log("Enter Something")'}
    </SyntaxHighlighter>
  );
};

export default Markdown;

const Container = styled.div`
height:calc(100vh-80px);
margin-top:.5%;
display:flex;
flex-direction:row;
background:#F5F5F5;
`
const LeftTextArea = styled.div`
margin:1%;
width: 48%;
height: 80%;
display:flex;
flex-direction:column;
textarea{
    margin-top:10px;
    font-size:16px;
    width: 100%;
    height: 80vh;
    background:#F5F5F5;
    border-style: none; 
    resize:none;
    overflow-y: scroll;
    line-spacing:1.5px;        
}
h3{
    display:flex;
    font-weight:600;
    color:#1A374D;
    opacity:0.6;
}
`
const RightDisplayArea = styled.div`
margin:1%;
margin-left:2%;
width: 49%;
height: 80vh;
font-size:16px;
display:flex;
flex-direction:column;
overflow-y: scroll;
line-spacing:1.5px;
h3{
    display:flex;
    font-weight:600;
    margin-bottom:8px;
    color:#1A374D;
    opacity:0.6;
}
`