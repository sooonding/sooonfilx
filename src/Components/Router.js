import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Home from 'Routes/Home'
import Tv from 'Routes/Tv';
import Search from 'Routes/Search';
import Header from './Header';
import Detail from 'Routes/Detail'




export default () => {
  return (
    
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact  path="/tv" component={Tv} />
          <Route exact path='/search' component={Search} />
          {/* tv와 movie detail에 맞는 router를 각각 만들어준다.  : <- 이부분은 아무거나 바뀔 수 있음 차후 변경예정*/}
          <Route exact path='/movie/:id' component = {Detail} />
          <Route exact path='/tv/:id' component={Detail} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router> 
    
  )
}

