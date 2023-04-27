import React, { useState } from 'react'
import Logo from '../../download (1).jpg'
import Brand from '../../logo.jpg'
import {Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {BsCart4} from 'react-icons/bs'
import {MdLogout} from 'react-icons/md'
import {IoMdAdd} from 'react-icons/io'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase.config'
import { useStateValue } from '../Context/stateProvider'
import {actionType} from '../Context/reducer'

export default function Navbar(){
    
    const provider = new GoogleAuthProvider();
    const firebaseAuth = getAuth(app)
    const [{user}, dispatch] = useStateValue();
    const [dropdown,setDropdown] = useState(false);
    const login = async() =>{
        if(!user)
        {
            const {user : {refreshToken,providerData}} = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type : actionType.SET_USER,
                user : providerData[0]
            })
            localStorage.setItem('user',JSON.stringify(providerData[0]))
        }
        else{
            setDropdown(!dropdown)
        }
    }
    const logout =()=>{
        setDropdown(false);
        localStorage.clear();
        setDropdown(!dropdown);

        dispatch({
            type: actionType.SET_USER,
            user: null,
        })
    }

    function menuClick(){
        setDropdown((prev)=>{
            return !prev;
        });
    }

    console.log(user)
  return (
    <nav className="p-2 w-screen py-1">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="hidden md:flex w-full h-full justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className='flex justify-center items-center'>
              <img className="h-16 w-auto rounded-full" src={Brand} alt="Logo" /> <span>City</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center justify-center space-x-4">
              <Link to="/" className="text-orange-400 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium" onClick={menuClick}>Home</Link>
              <Link to="/about" className="text-orange-400 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium" onClick={menuClick}>About Us</Link>
              <Link to="/services" className="text-orange-400 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium" onClick={menuClick}>Services</Link>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <Link to="/cart">
                <BsCart4 size={24} className="relative top-4"/>
                <span className="relative bg-red-400 h-4 w-4 text-xs px-2 py-1 bottom-6 left-4 rounded-full">0</span>
              </Link>
            </div>
            <div className="relative">
                <motion.img whileTap={{scale : 0.8}}
                src={user ? user.photoURL : Logo} className="h-12 w-12 rounded-full cursor-pointer hover:shadow-xl" onClick={login}/>   
            {dropdown && <motion.div
            initial ={{opacity:0,scale:0.6}}
            animate ={{opacity:1,scale:1}}
            exit ={{opacity:0,scale:0.6}}
            className='w-40 px-2 py-1 flex flex-col absolute bg-slate-100 right-0 items-center justify-center rounded-lg z-10'>
                <Link to="/create-item">{user.email === "balajibachu2002@gmail.com" && <p className='py-1 px-2 hover:cursor-pointer hover:shadow-inner w-fit flex gap-2 items-center justify-center rounded-lg transition-all duration-100 ease-in-out ' onClick={menuClick}>Add Item <IoMdAdd /></p>}</Link>
                <p className='py-1 px-2 hover:cursor-pointer hover:shadow-inner w-fit flex gap-3 items-center justify-center rounded-lg transition-all duration-100 ease-in-out bg-red-500 text-white my-2 ' onClick={logout}>Logout <MdLogout /></p>
            </motion.div>}
            </div>
          </div>
        </div>

        <div className="">
        <div className=" flex md:hidden w-full justify-between items-center">
            <Link to="/cart">
                <BsCart4 size={22} className="relative top-4"/>
                <span className="relative bg-red-400 text-xs px-2 py-1 bottom-4 left-4 rounded-full">0</span>
            </Link>

            <Link to="/" className='flex justify-center items-center'>
              <img className="h-16 w-auto rounded-full" src={Brand} alt="Logo" /> <span>City</span>
            </Link>
            
            <div className="relative">
                <motion.img whileTap={{scale : 0.8}}
                src={user ? user.photoURL : Logo} className="h-8 w-8 rounded-full cursor-pointer hover:shadow-xl" onClick={login}/>   
            {dropdown && <motion.div
            initial ={{opacity:0,scale:0.6}}
            animate ={{opacity:1,scale:1}}
            exit ={{opacity:0,scale:0.6}}
            className='w-32 px-2 py-1 flex flex-col absolute bg-slate-100 right-0 items-center justify-center rounded-lg mt-2'>
                <Link to="/create-item">{user.email === "balajibachu2002@gmail.com" && <p className='py-1 px-2 hover:cursor-pointer hover:shadow-inner w-full flex gap-2 items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:bg-slate-200 ' onClick={menuClick}>Add Item <IoMdAdd /></p>}</Link>
            <Link to="/" className="py-1 px-2 hover:cursor-pointer hover:shadow-inner w-full flex gap-2 items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:bg-slate-200 " onClick={menuClick}>Home</Link>
            <Link to="/about" className="py-1 px-2 hover:cursor-pointer hover:shadow-inner w-full flex gap-2 items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:bg-slate-200 " onClick={menuClick}>About Us</Link>
            <Link to="/services" className="py-1 px-2 hover:cursor-pointer hover:shadow-inner w-full flex gap-2 items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:bg-slate-200 " onClick={menuClick}>Services</Link>
                <p className=' bg-red-500 text-white my-1 py-1 px-2 hover:cursor-pointer hover:shadow-inner w-full flex gap-3 items-center justify-center rounded-lg transition-all duration-100 ease-in-out hover:bg-slate-200' onClick={logout}>Logout <MdLogout /></p>
            </motion.div>}
            </div>
        </div>
        </div>
      </div>
    </nav>
  );
}
