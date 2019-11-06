import React, {createContext} from 'react'
import {createBrowserHistory} from 'history'
import {locationToRoute} from './Utils'

// initialize browser history for the router to work
export const history = createBrowserHistory()

// create the context that will hold the current's route information
export const RouterContext = createContext({
  route: locationToRoute(history.location)
})