import React, {useContext} from 'react'
import {RouterContext} from './RouterContext'

export default function Route({path, component}) {
  // get the current route from the router's context
  const currentRoute = useContext(RouterContext)
  if (!currentRoute) {
    throw new Error('The Route Component can only be used inside a <Router/> Component')
  }
  // match the given path to the current route path
  // if we match, we can render the children
  if (currentRoute.path !== path) {
    return null
  }
  const Component = component
  return <Component/>
}