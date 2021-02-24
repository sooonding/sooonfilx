import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => {
  console.log("Home loading :", loading);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        /* Section 사이에 있는 값들은 children으로 props로 넘겨줄 수 있다. */
        <Section title="now Playing">
          {nowPlaying.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        /* Section 사이에 있는 값들은 children으로 props로 넘겨줄 수 있다. */
        <Section title="up comming">
          {upcoming.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        /* Section 사이에 있는 값들은 children으로 props로 넘겨줄 수 있다. */
        <Section title="popular">
          {popular.map((item) => (
            <span key={item.id}>{item.title}</span>
          ))}
        </Section>
      )}
    </Container>
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
