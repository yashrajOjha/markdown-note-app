import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return <Container>
      <h1>
          Your Average Note Taking App
      </h1>
  </Container>;
}

const Container = styled.div`
    height:70px;
    width:100%;
    background:#1A374D;
    color:#B1D0E0;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    h1{
        background:#1A374D;
        margin-left:2%;
    }
`