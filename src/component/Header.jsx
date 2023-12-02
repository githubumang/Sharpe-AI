import React,{useState} from 'react'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = () => {
    const Navbars = [
        {
            title:'Home',
            link:'/'
        },
        {
            title:'Transaction',
            link:'./transaction'
        },
        {
            title:'Data',
            link:'./data'
        }
    ]
    const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <>
    <div className='hidden md:flex m-2 bg-gray-300 rounded shadow-md md:py-3 md:px-10  '>
        <div className='flex'>
        <img src={logo} className='w-10' alt='logo'/>
        </div>
        <div className='md:flex mt-2  mx-auto hidden md:visible '>
            {Navbars.map((Navbar, index)=>{
                return(
                    <div className='hover:font-[600]'>
                    <Link to={Navbar.link} className='mx-3' key={index}>
                        {Navbar.title}
                    </Link>
                    </div>
                )
            })}
        </div>
    </div>
    <div className='md:hidden m-2 bg-white rounded '>
        <div className='flex justify-between px-3'>
        <img src={logo} className='w-10' alt='logo'/>
        <IoReorderThreeOutline className='my-auto text-[38px]' onClick={(()=>{setToggleNavbar(!toggleNavbar)})}/>
        </div>
        {toggleNavbar && (
            <div className='text-center'>
                <div className=''>
                    {Navbars.map((Navbar, index)=>{
                        return(
                            <div className='' key={index}>
                            <Link to={Navbar.link} onClick={(()=>{setToggleNavbar(false)})}>
                                {Navbar.title}
                            </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )}
    </div>

    </>

  )
}

export default Header