import React, { useState, useEffect } from "react";
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from 'api';

const SearchContainer = (props) => {

  const [state, setState] = useState({
    movieResult : null,
    tvResult : null,
    searchText : 'code',
    loading: true,
    error: null,
  });

  

  const {searchText, movieResult, tvResult, loading, error } = state;


  const handleSubmit = () => {
    // const {searchText} = state;
    if(searchText !== "") {
      //텍스트가 있다면 실행할 로직의 함수를 넣는다.
      searchHandler();
    }
  } 
  const searchHandler = async() => {    
    setState({...state, loading : true});
    try { 
      const {data : {results : movieResult}} = await moviesApi.searchMovie(searchText) //인자에 text value 값이 들어가야 prams로 전달된다.
      const  {data : {results : tvResult}} = await tvApi.searchTv(searchText);
      setState({...state,tvResult,movieResult});  
    }catch {
      setState({...state, error : '해당하는 내용이 없습니다.'});
    }finally {
      setState({...state,loading : false})
    }
  }

  
  return (
    <div>
      <SearchPresenter
        searchText={searchText}
        movieResult={movieResult}
        tvResult={tvResult}
        loading={loading}
        error={error}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SearchContainer;
