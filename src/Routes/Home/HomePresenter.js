import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";

const Container = styled.div`
  padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => {
  console.log("Home :", nowPlaying);
  return (
    <>
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="now Playing">사이에서 나오지요</Section>
        )}
      </Container>
    </>
  );
};

HomePresenter.prototypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
