import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

const Data = ({posts}) => {
    const count = 10;
    // setCount(10);
  return (
    <div className='text-white mx-2'>
        <table className='border-2'>
            <tr className='border-2'>
                <th className='cursor-default'>Id</th>
                <th className='cursor-default'>Title</th>
                <th className='cursor-default'>Body</th>
            </tr>
            
        {posts.map((post, index)=>{
            if(post.userId===1){
            return(
                <tr key={index} className='hover:bg-gray-700'>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                </tr>
            )}
        })}
       
        </table>
        <div className='flex mt-20 '>
        <div className='w-1/2 '>
        {<Chart id1={count} totalIds={posts.length}/>}
        </div>
        <div className='w-1/2 pl-2 h-1/2 '>
            <div className='flex w-full align-center'><div className='h-5 w-5 mr-1 bg-[#E38627]'></div><div>UserId1 - 10</div></div>
            <div className='flex w-full'><div className='h-5 w-5 mr-1 bg-[#C13C37]'></div><div>Total Users - {posts.length}</div></div>
        </div>
        </div>
        
        c{count}
    </div>
  )
}

const Chart =({id1, totalIds})=>{
    return(
        <>
        <PieChart
            data={[
                { title: "User ID1's post", value: id1, color: '#E38627' },
                { title: "Other ID's post", value: totalIds, color: '#C13C37' }
            ]}
        />
        </>
    )
}

export default Data