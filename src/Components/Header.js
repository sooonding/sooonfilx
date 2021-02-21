import React from "react";
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom';

//withRouter : 다른 컴포넌트를 감싸는 컴포넌트, Router에 어떠한 정보를 준다 .

const Header = styled.header`
  color : white;
  position : fixed;
  top : 0;
  left : 0;
  width : 100%;
  height : 50px;
  display : flex;
  align-items : center;
  padding : 0px 10px;
  box-shadow : 0px 1px 1px 0.5px white;
`

const List = styled.ul`
  display:flex;
`

const Item = styled.li`
  width : 50px;
  height : 50px;
  text-align : center;
  border-bottom : 5px solid ${props => (props.current ? "#3498db" : "transparent")};
`

const Slink = styled(Link)`
  height : 50px;
  display : flex;
  align-items : center;
  justify-content : center;
`

export default withRouter(({location : {pathname}}) => (

    <Header>
      <List>
        {/* current는 boolean값을 도출한다. */}
        <Item current={pathname === '/'}>
          <Slink to="/">home</Slink>
        </Item>
        <Item current={pathname === '/tv'}>
          <Slink to="/tv">tv</Slink>
        </Item>
        <Item current={pathname === '/search'}>
          <Slink to="/search">search</Slink>
        </Item>
      </List>
    </Header>
  
))
