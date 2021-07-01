import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment} from '../actions/templateActions'


const Hooks = () => {
  //global state variable
  const count = useSelector(state => state.template.counter)

  // local state

  const [title, setTitle] = useState("Redux Template")

  // receive dispatch function
  const dispatch = useDispatch()

  //componentDidMount (executes once)
  useEffect(() => {

    //compondentDidUnmount -- clean up function
    /* return () => {
      
    } */
  }, [])


  return (
    <>
      <h1>{title}</h1>

      <h3>{count}</h3>

      <button onClick={()=>dispatch(increment(4))}>Click Me to Update Global State</button>
    </>
  )
}

export default Hooks