import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {RouterContext, history} from './RouterContext'
import {locationToRoute} from './Utils'

export default function Router({routes, NotFound, children}) {
  const [currentRoute, setCurrentRoute] = useState(locationToRoute(history.location))
  function handleRouteChange(location) {
    const newRoute = locationToRoute(location)
    setCurrentRoute(newRoute)
  }
  history.listen(handleRouteChange)
  const paths = Object.keys(routes).map((key) => routes[key].path);
  const is404 = paths.indexOf(currentRoute.path) === -1
  return (
    <RouterContext.Provider value={currentRoute}>
      {is404 ? <NotFound/> : children}
    </RouterContext.Provider>
  )
}

