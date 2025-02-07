
import React from 'react'
import AnchorTemporaryDrawer from './navbarforandroid'
import { display } from '@mui/system'
const logo = '/assets/logo.webp'
const blank = '/assets/blank.png'
function Head() {
  return (
    <div className='header-main w-full h-auto'>
      <div className='header flex bg-black opacity-85 justify-between pr-2'>

        <div className='left flex items-center'>
          <div>
            {<AnchorTemporaryDrawer />}
          </div>
          <div className='logodiv flex h-auto max-w-fit'>
            <img src={logo} className=' logo-i m-4 h-auto object-cover max-w-[50px]'/>
            <p className='logo w-max text-white text-3xl p-2 m-4 px-5 pr-9'>Nishant</p>
        </div>
        </div>
        
          
      

      <div className='right flex items-center p-5' >
        <div className="nav-links text-white pr-5 flex space-x-5" >
          <span className="font-1vw"><a href="/"> Home |</a></span>
          <span className="font-1vw"><a href="#projects"> Projects |</a></span>
          <span className="font-1vw"><a href="#about"> About |</a></span>
          <span className="font-1vw"><a href="#skills"> Skills |</a></span>
          <span className="font-1vw"><a href="#footer"> Contact |</a></span>
        </div>
        <div className='button-rap'>
          <button className='head-button' onClick={openwp}>Get in Touch</button>
        </div>
      </div>
    </div>
    </div >
  )
}

export default Head


function openwp() {
  window.open('https://wa.me/+919773005701')
}
