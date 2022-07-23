import React, { Fragment, useEffect, useState, createContext} from 'react';
export const userCon=createContext()
export default function Home() {
  
  const [Count, setCount] = useState({
    name:'hama',
    name2:'hama2',
  });
  const Increase= ()=>{
    setCount((data)=>{
      return {...data,name:'hamataza'}
    })
  }
  useEffect(()=>{
    setCount((prev)=>{
      return {...prev,name:'hamakon'}
    })
  })
  return (
    <Fragment>
    <div className='text-blue-500'>home</div>
    <userCon.Provider value={Count.name}></userCon.Provider>
    <p>{Count.name} {Count.name2}</p>
    <button onClick={Increase} className="bg-red-600 text-white">Incvrease by 1</button>
    </Fragment>
  )
}
