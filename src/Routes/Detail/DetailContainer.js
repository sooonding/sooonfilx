import React, { useState, useEffect } from "react";
import Detailpresenter from "./Detailpresenter";
import { moviesApi, tvApi } from "api";

const DetailContainer = (props) => {
  const {
    location: { pathname },
  } = props;
  const [values, setValues] = useState({
    result: null,
    loading: true,
    error: null,
    isMovie: pathname.includes("/movie/"),
  });
  const { isMovie, result, loading, error } = values;

  useEffect(async () => {
    // props => match.parmas.id, history.push

    const {
      match: {
        params: { id },
      },
      history: { push },
    } = props;

    const parseId = parseInt(id);

    // 숫자가 아니면 홈으로 돌아가는 분기처리
    if (isNaN(parseId)) {
      return push("/"); //함수 종료를 위해 return을 해준다.
    }

    // movieDetail,tvDetail을 위한 데이터 통신 로직
    
    try {
      if (isMovie) {
        const {data} = await moviesApi.movieDetail(parseId);
        console.log(data)
      } else {
        const {data} = await tvApi.showDetail(parseId);
      }
    } catch {
      setValues({ ...values, error: "해당 url이 없습니다." });
    } finally {
      setValues({ ...values, loading: false });
    }
  }, []);
  return (
    <div>
      <Detailpresenter result={result} loading={loading} error={error} />
    </div>
  );
};

export default DetailContainer;
