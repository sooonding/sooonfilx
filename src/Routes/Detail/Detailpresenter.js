import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Detailpresenter = ({ result, loading, error }) => null;

Detailpresenter.prototypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Detailpresenter;
