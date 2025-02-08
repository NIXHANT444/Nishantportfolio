import React from 'react';

const logo = '/assets/logo.webp';

function Head() {
  return (
    <div className='header-main' style={{ width: '100%', height: 'auto' }}>
      <div className='header' style={{ display: 'flex', backgroundColor: 'black', opacity: '0.85', justifyContent: 'space-between', paddingRight: '8px' }}>
        <div className='left'  style={{ display: 'flex', alignItems: 'center' }}>
          <div className='logodiv' style={{ display: 'flex', height: 'auto', maxWidth: 'fit-content' }}>
            <img className='logo-i'
              src={logo} 
              alt="Logo"
              style={{ marginLeft:'16px',marginTop:'16px', height: '50px', objectFit: 'cover', maxWidth: '50px' }}
            />
            <p className="logo"style={{ color: 'white', fontSize: '1.875rem', margin: '16px' }}>
              Nishant
            </p>
          </div>
        </div>

        <div className='right' style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
          <div style={{ color: 'white', paddingRight: '20px', gap: '20px' }} className="nav-links">
            <span style={{ fontSize: '1vw' }}><a href="/" style={{ color: 'white', textDecoration: 'none',marginRight:'25px' }}>Home |</a></span>
            <span style={{ fontSize: '1vw' }}><a href="#projects" style={{ color: 'white', textDecoration: 'none',marginRight:'25px' }}>Projects |</a></span>
            <span style={{ fontSize: '1vw' }}><a href="#about" style={{ color: 'white', textDecoration: 'none',marginRight:'25px' }}>About |</a></span>
            <span style={{ fontSize: '1vw' }}><a href="#skills" style={{ color: 'white', textDecoration: 'none',marginRight:'25px' }}>Skills |</a></span>
            <span style={{ fontSize: '1vw' }}><a href="#footer" style={{ color: 'white', textDecoration: 'none' }}>Contact |</a></span>
          </div>
          <div className='button-rap'>
            <button className='head-button'
              style={{ padding: '10px 20px', backgroundColor: '#f08b33', color: 'white', border: 'none', borderRadius: '40px', cursor: 'pointer' }}
              onClick={openwp}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function openwp() {
  window.open('https://wa.me/+919773005701');
}

export default Head;