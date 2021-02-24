import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const Tvpresenter = ({ topRated, popular, airingToday, loading, error }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {/* loading 유무에 따른 렌더의 변화 */}
      {topRated && topRated.length > 0 && (
        <Section title="topRated">
          {topRated.map((tv) => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular">
          {popular.map((tv) => (
            <span>
              {" "}
              key={tv.id} {tv.name}
            </span>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="airingToday">
          {airingToday.map((tv) => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Section>
      )}
    </Container>
  );
};

Tvpresenter.prototypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Tvpresenter;
