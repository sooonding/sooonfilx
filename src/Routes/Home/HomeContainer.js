import React, { useState, useEffect, useCallback } from 'react'
import HomePresenter from './HomePresenter'
import { moviesApi } from 'api'

const HomeContainer = () => {

  const [values,setValues] = useState({
    nowPlaying : null,
    upcoming : null,
    popular : null,
    loading : true,
    error : null,
  })

  const initData = useCallback(async() => {
    try{
      // const response = await moviesApi.nowPlaying();
      // 객체 비구조화 할당을 통해 위 코드와 동일하게 작동하는 방식

      const {data : {results : nowPlaying}} = await moviesApi.nowPlaying();
      
      const {data : {results : upcoming}} = await moviesApi.upcoming();

      const {data : {results : popular}} = await moviesApi.popular();

      setValues({...values, nowPlaying,popular,upcoming })

    }catch{
      setValues({...values,error : "요청하신 무비의 정보를 찾을 수 없습니다."})
    }finally {
      setValues({...values, loading : false})
    }
  },[values])

  console.log(values,'초기 데이터 렌더 values')

  useEffect(()=>{
    //첫 렌더링시 나오는 값
    initData();
  },[])
  const {nowPlaying, upcoming,popular,loading,error} = values
  return (
    <div>
      <HomePresenter nowPlaying={nowPlaying} upcoming={upcoming} popular={popular} loading={loading} error={error}/>
    </div>
  )
}

export default HomeContainer
