import React, {Suspense, lazy} from 'react'
import {Redirect, HashRouter, Route, Switch} from 'react-router-dom'
import withMainContainer from './HighOrderComponent'
const Landing = lazy(() => import('./Landing'))
const Login = lazy(() => import('./Login'))
const Home = lazy(() => import('./Home'))
const NotFoundPage = lazy(() => import('./NotFound'))


function App() {
    return (
        <Suspense fallback={""}>
          <HashRouter>
            <Switch>
              <Route exact path='/' component={Landing}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/home' component={withMainContainer(Home)}/>
              {/*<Route path='/reportsb2c/:idReport/detail/grupo/:idGrupo/:idSubgrupo?/:idEntrada?' component={withMainContainer(ReportB2CDetail)}/>*/}
              <Route path='/not-found' component={withMainContainer(NotFoundPage)} />
              <Route path='*' render={() => <Redirect to='/not-found'/>}/>
            </Switch>
          </HashRouter>
        </Suspense>
    )
}

export default App;