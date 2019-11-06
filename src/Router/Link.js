import React, {useContext} from 'react'
import {RouterContext, history} from './RouterContext'

export default function Link(props) {
  // get the assigned link props 
  const {to, onClick, children} = props
  const currentRoute = useContext(RouterContext)
  if (!currentRoute) {
    throw new Error('The Link Component can only be used inside a <Router/> Component/')
  }
  // handle link click
  function handleClick(e) {
    e.preventDefault()

    // don't navigate to the provided route if it already matches.
    if (currentRoute.path === to) {
      return
    }

    // manually trigger the onClick handler passed through props if it's a function
    if (typeof onClick === 'function') {
      onClick(e)
    }

    // navigate to required page
    history.push(to)
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  )
}
