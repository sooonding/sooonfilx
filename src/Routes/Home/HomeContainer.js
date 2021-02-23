import React, { useState, useEffect, useCallback } from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";

const HomeContainer = () => {
  const [values, setValues] = useState({
    nowPlaying: null,
    upcoming: null,
    popular: null,
    loading: true,
    error: null,
  });
  const { nowPlaying, upcoming, popular, loading, error } = values;

  const initData = useCallback(async () => {
    try {
      // const response = await moviesApi.nowPlaying();
      // 객체 비구조화 할당을 통해 위 코드와 동일하게 작동하는 방식

      // const {
      //   data: { results: nowPlaying },
      // } = await moviesApi.nowPlaying();
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();

      const {
        data: { results: popular },
      } = await moviesApi.popular();

      setValues({ ...values, nowPlaying, popular, upcoming });
    } catch {
      setValues({
        ...values,
        error: "요청하신 무비의 정보를 찾을 수 없습니다.",
      });
    } finally {
      /* 
    NOTE 주의! finally는 주의해서 사용해야 할 거 같다  
    차라리 try나 catch문에서 loading에 관한 state를 변경하는 것이 나을 거 같다.
    */
      if (error !== null) {
        setValues({ ...values, loading: false });
      }
    }
  }, []);

  useEffect(() => {
    initData();
  }, [initData]);

  return (
    <div>
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default HomeContainer;
