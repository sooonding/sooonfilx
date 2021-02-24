import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

const Loader = () => {
  return (
    <>
      <Container>
        <span>⏲</span>
      </Container>
    </>
  );
};

export default Loader;
