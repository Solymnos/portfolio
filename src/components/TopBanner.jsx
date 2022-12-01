import React from 'react';
import sun from '../assets/img/sun.png'

function TopBanner() {
  return (
    <div className='Top-Banner'>
        <div className='First-Rectangle-Banner'>
            <div className='Second-Rectangle-Banner'>
                
            </div>
        </div>
        <div className='TopBannerIcon'>
            EN
        </div>
        <div className='TopBannerIcon'>
            <img src={sun} alt='light mode icon'/>
        </div>
    </div>
  )
}

export default TopBanner;