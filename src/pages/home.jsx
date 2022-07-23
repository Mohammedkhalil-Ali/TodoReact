import React, { Fragment, useEffect, useState, createContext} from 'react';
export const userCon=createContext()
export default function Home() {
  
  const [Item, setItem] = useState({
    name:''
  });
  const Increase= ()=>{
    setItem((data)=>{
      return {...data,name:'hamataza'}
    })
  }
  useEffect(()=>{
    // setItem((prev)=>{
    //   return {...prev,name:'hamakon'}
    // })
  })
  return (
    <Fragment>
      <div className='flex items-center justify-center h-screen w-screen  text-white'>
        <div className=' bg-slate-200 w-80 h-80 text-white  rounded-md '>
          <div className="header mt-2 flex justify-around">
            <input type="text" className='h-10 bg-slate-50 text-gray-900 placeholder:text-gray-900 p-2 focus:outline-none rounded-md' placeholder='Write new item'
            onChange={(event)=>{setItem({name:event.target.value})}} />
            <button className='bg-green-500 hover:bg-green-600 w-16 p-2 rounded-md'>Add</button>
          </div>
          <hr className='opacity-30 bg-slate-700 w-full h-[2px] mt-1'/>
          <p>{Item.name}</p>
        </div>
      </div>
    </Fragment>
  )
}
