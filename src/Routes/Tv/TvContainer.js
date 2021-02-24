import React, { useState, useEffect } from "react";
import Tvpresenter from "./Tvpresenter";
import { tvApi } from "api";

const TvContainer = () => {
  const [state, setState] = useState({
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  });

  useEffect(async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      setState({ ...state, topRated, popular, airingToday, loading: false });
    } catch {
      setState({
        ...state,
        loading: false,
        error: "tv 해당정보를 찾을수없습니다.",
      });
    }
  }, []);

  console.log(state, "useEffect");

  const { topRated, popular, airingToday, loading, error } = state;
  return (
    <div>
      <Tvpresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default TvContainer;
