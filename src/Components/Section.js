import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.span``;

const Grid = styled.div``;

const Section = ({ title, children }) => {
  console.log("section :", title, children);
  return (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );
};

Section.prototypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
