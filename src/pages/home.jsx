import { data } from 'autoprefixer';
import React, { Fragment, useEffect, useState, createContext} from 'react';
export const userCon=createContext()

let x=3;
export default function Home() {


  const [Item, setItem] = useState({
    name:'',id:3
  });
  const [updateItem, setUpdateItem] = useState({
    name:''
  });
  let [show, setShow] = useState({userId:null,show:true});
  let [datanaw, setNaw] = useState([
    { name:'ahmad',id:1},
    { name:'Mhamad',id:2},
  ]);
  const Increase= ()=>{
    setItem((data)=>{
      return {...data,name:'hamataza'}
    })
  }
  const Add =()=>{
    x++;
    setNaw([...datanaw,Item])
    setItem({name:''})
    console.log(datanaw);
  }
  useEffect(()=>{
    // setItem((prev)=>{
    //   return {...prev,name:'hamakon'}
    // })
  })
  const UpdateItemM=(userIduse)=>{
    setShow({show:false,userId:userIduse})
  }
  const back=()=>{
    setShow({show :true,id:null})
  }

  const UpdateItemData=()=>{
    setNaw(datanaw.map(item=>item.id==show.userId? {...item,name:updateItem.name}:item)) 
    setShow({show:true,userId:null})
  }
  return (
    <Fragment>
      <div className='flex items-center justify-center h-screen w-screen  text-white bg-slate-300'>
        <div className=' bg-slate-200 w-80 h-80 text-white  rounded-md '>
          <div className="header mt-2 flex justify-around">
            <input type="text" className='h-10 bg-slate-50 text-gray-900
                             placeholder:text-gray-900 p-2 focus:outline-none rounded-md' placeholder='Write new item'
            onChange={(event)=>{setItem({...Item,name:event.target.value })}} value={Item.name} />
            <button onClick={Add} className='bg-green-500 hover:bg-green-600 w-16 p-2 rounded-md'>Add</button>
          </div>
          <hr className='opacity-30 bg-slate-700 w-full h-[2px] mt-1'/>
          { show.show? datanaw.map((event)=>{
            return (<div className='text-black w-[98%] m-auto mt-1 rounded-md
                       hover:bg-slate-400 p-2 bg-slate-100 flex justify-between' key={event.name}>
              <div className="name">{event.name}</div>
              <div className="name flex">
                <button className='text-red-700'>Del</button>
                <button className='text-blue-700' onClick={()=>{UpdateItemM(event.id)}}>Up</button>
              </div>
            </div>) 
          }) : 
          <div className='flex justify-between'>
            <input type="text" className='text-black' onChange={(event)=>{setUpdateItem({name:event.target.value})}}/>
            <button onClick={UpdateItemData}>Update</button>
            <button onClick={back}>back</button>
            </div>}
        </div>
      </div>
    </Fragment>
  )
}
