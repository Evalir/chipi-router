import React from 'react'
import Router from './Router/Router'
import Link from './Router/Link'
import Route from './Router/Route'

const routes = {
  home: {
    path: '/'
  },
  why: {
    path: '/why'
  },
  about: {
    path: '/about'
  }
}

const Home = () => <h1>Home</h1>
const Why = () => <h1>Why us?</h1>
const About = () => <h1>About us</h1>
const NotFound = () => <h1>Not Found</h1>
const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/why">Why</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)

const App = () => (
  <main>
    <Router NotFound={NotFound} routes={routes}>
      <NavBar/>
      <Route path={routes.home.path} component={Home}/>
      <Route path={routes.why.path} component={Why}/>
      <Route path={routes.about.path} component={About}/>
    </Router>
  </main>
)

export default App;