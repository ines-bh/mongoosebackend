import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  const dispatch = useDispatch(),

  return (
    <header>
        {/* contact list button */}

        <Link to= '/'>
      <button className='appBtn'>Contact List</button>
      </Link>

      {/* add contact button */}
      <Link to='/addContact'>
      <button className='appBtn' 
      onClick={()=>dispatch(toggleFalse())}>Add Contact </button>
      </Link>
    </header>
  )
}

export default NavBar
