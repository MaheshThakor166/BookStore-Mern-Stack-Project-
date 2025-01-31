import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards';
import {Link} from "react-router-dom";
function Course({item}) {
  return (
    <>   
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4' >
    <div    className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>We 're delighted  to have you {" "}
        <span className='text-pink-400'>Here!:)</span>
        </h1> 
        <p className='mt-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, commodi. Mollitia eveniet et ut neque ratione odio libero quae ab assumenda ad, cumque quam reprehenderit tenetur. Voluptatum rem consectetur !!!
        </p> 
        <Link to="/">
       
        <button className='bg-pink-500 text-white mt-6 py-2 px-4  rounded-md  hover:bg-pink-700  duration-300'>Back</button>  
        </Link>
        </div>
       <div className='mt-12  grid grid-cols-1 md:grid-cols-4'>
        {list.map((item)=>{
            return   <Cards item={item} key={item.id}/>;
        })}
       </div>
    </div>
    </>
  )
}

export default Course