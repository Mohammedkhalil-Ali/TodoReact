import React,{ useContext} from 'react'
import {userCon} from './home'

export default function About() {
    const Count=useContext(userCon);
  return (
    <div>{Count}</div>
  )
}
