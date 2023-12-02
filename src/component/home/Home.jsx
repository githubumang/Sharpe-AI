import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-gray-400 text-center mt-3'>
        <div className='text-[60px] ease-in duration-500 delay-150 hover:underline hover:text-[65px] hover:font-[600] cursor-default'>Welcome to Sharpe.ai</div>
        <Link to={'/transaction'} className='mt-10 text-[30px] cursor-default'>Fill your Wallet <span className='hover:underline hover:font-[600] cursor-pointer'>transaction</span>. </Link>
        <br />
        <Link to={'/data'} className='mt-10 text-[30px] cursor-default'>See our data <span to={'/transaction'} className='hover:underline hover:font-[600] cursor-pointer'>here</span>.</Link>
    </div>
  )
}

export default Home