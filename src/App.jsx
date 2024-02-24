import React from "react";
import styled from "styled-components";
import {NavBar}  from "./components/NavBar";

const Container = styled.div`
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;

export default function App() {
  return (
    <Container>
      <NavBar/>
    </Container>
  );
}
